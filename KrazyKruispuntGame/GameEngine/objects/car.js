Car = (function () {
    // private code komt hier...
    var carSprites = [];

    return {
        // public code komt hier...
        reset: function () {
            carSprites = [];
        },

        create: function (locX, locY, orientation) {
            cars = ['audi', 'audi_metallic', 'audi_yellow', 'audi_blue']
            var random_audi = cars[Math.floor(Math.random() * cars.length)];
            var sprite = game.add.sprite(locX, locY, random_audi);
            sprite.anchor.setTo(0.5, 0.5);
            switch (orientation) {
                case "north":
                    sprite.angle = 0;
                    lerp_angle = 0;
                    break;
                case "east":
                    sprite.angle = 90;
                    lerp_angle = 90;
                    break;
                case "south":
                    sprite.angle = 180;
                    lerp_angle = 180;
                    break;
                case "west":
                    sprite.angle = -90;
                    lerp_angle = -90;
                    break;
            }
            carSprites.push({
                sprite: sprite,
                lerp_x: locX,
                lerp_y: locY,
                lerp_angle: lerp_angle,
                orientation: orientation
            })
        },

        render: function () {
            for (c in carSprites) {
                // if ((carSprites[c].sprite.x > 850) || (carSprites[c].sprite.x < -250) || (carSprites[c].sprite.y > 850) || (carSprites[c].sprite.y < -250)) {
                //     carSprites[c].sprite.destroy();
                // }

                carSprites[c].sprite.x = Phaser.Math.linearInterpolation([carSprites[c].sprite.x, carSprites[c].lerp_x], 0.05);
                carSprites[c].sprite.y = Phaser.Math.linearInterpolation([carSprites[c].sprite.y, carSprites[c].lerp_y], 0.05);

                switch (carSprites[c].orientation) {
                    case "north":
                        carSprites[c].lerp_angle = 0;
                        break;
                    case "east":
                        carSprites[c].lerp_angle = 90;
                        break;
                    case "south":
                        carSprites[c].lerp_angle = 180;
                        break;
                    case "west":
                        carSprites[c].lerp_angle = -90;
                        break;
                }

                carSprites[c].sprite.angle = carSprites[c].lerp_angle;

                // if ((Math.abs(carSprites[c].sprite.angle - carSprites[c].lerp_angle) > 5)) {
                //     carSprites[c].sprite.angle = Phaser.Math.linearInterpolation([carSprites[c].sprite.angle, carSprites[c].lerp_angle], 0.02);
                // } else {
                //     carSprites[c].sprite.angle = carSprites[c].lerp_angle;
                // }
            }
        },

        update: function (carObjects, index) {
            if (index.length !== 0) {
                for (i = 0; i < index.length; i++) {
                    carSprites[index[i]].sprite.destroy();
                    carSprites.splice(index[i], 1);
                }
            }
            
            if (carSprites.length < carObjects.length) {
                var difference = carObjects.length - carSprites.length;
                for (i = 0; i < difference; i++) {
                    this.create(toGridX(carObjects[carSprites.length + i].getX()) + 50,
                        toGridY(carObjects[carSprites.length + i].getY()) + 50,
                        carObjects[carSprites.length + i].getDirection());
                }
            }

            for (c = 0; c < carObjects.length; c++) {
                carSprites[c].lerp_x = toGridX(carObjects[c].getX()) + 50;
                carSprites[c].lerp_y = toGridY(carObjects[c].getY()) + 50;
                carSprites[c].orientation = carObjects[c].getDirection();
            }
        },

        getCars: function () {
            return carSprites;
        },
        destroyAt: function (index) {

        }
    };
})();