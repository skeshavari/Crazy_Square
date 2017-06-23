Car = (function () {
    // private code komt hier...
    var carSprites = [];

    return {
        // public code komt hier...
        reset: function () {
            carSprites = [];
        },

        create: function (locX, locY, orientation) {
            var sprite = game.add.sprite(locX, locY, 'police');
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
            for (var i = 0; i < carSprites.length; i++) {
                // if ((carSprites[c].sprite.x > 850) || (carSprites[c].sprite.x < -250) || (carSprites[c].sprite.y > 850) || (carSprites[c].sprite.y < -250)) {
                //     carSprites[c].sprite.destroy();
                // }

                carSprites[i].sprite.x = Phaser.Math.linearInterpolation([carSprites[i].sprite.x, carSprites[i].lerp_x], 0.05);
                carSprites[i].sprite.y = Phaser.Math.linearInterpolation([carSprites[i].sprite.y, carSprites[i].lerp_y], 0.05);

                switch (carSprites[i].orientation) {
                    case "north":
                        carSprites[i].lerp_angle = 0;
                        break;
                    case "east":
                        carSprites[i].lerp_angle = 90;
                        break;
                    case "south":
                        carSprites[i].lerp_angle = 180;
                        break;
                    case "west":
                        carSprites[i].lerp_angle = -90;
                        break;
                }

                carSprites[i].sprite.angle = carSprites[i].lerp_angle;

                // if ((Math.abs(carSprites[c].sprite.angle - carSprites[c].lerp_angle) > 5)) {
                //     carSprites[c].sprite.angle = Phaser.Math.linearInterpolation([carSprites[c].sprite.angle, carSprites[c].lerp_angle], 0.02);
                // } else {
                //     carSprites[c].sprite.angle = carSprites[c].lerp_angle;
                // }
            }
        },

        update: function (carObjects, index) {
            if (index.length !== 0) {
                for (var i = 0; i < index.length; i++) {
                    carSprites[index[i]].sprite.destroy();
                    carSprites.splice(index[i], 1);
                }
            }

            if (carSprites.length < carObjects.length) {
                var difference = carObjects.length - carSprites.length;
                for (var j = 0; j < difference; j++) {
                    this.create(toGridX(carObjects[carSprites.length + j].getX()) + 50,
                        toGridY(carObjects[carSprites.length + j].getY()) + 50,
                        carObjects[carSprites.length + j].getDirection());
                }
            }

            for (var c = 0; c < carObjects.length; c++) {
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