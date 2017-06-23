Car = (function () {
    // private code komt hier...
    var carSprites = [];

    return {
        // public code komt hier...
        reset: function () {
            carSprites = [];
        },

        create: function (locX, locY, orientation, route) {
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

            switch (route) {
                case "forward":
                    knipper_x = locX;
                    knipper_y = locY;
                    break;
                case "left":
                    knipper_x = locX;
                    knipper_y = locY;
                    break;
                case "right":
                    knipper_x = locX;
                    knipper_y = locY;
                break;
            }

            emitter_smoke = game.add.emitter(game.world.centerX, game.world.centerY, 400);
            emitter_smoke.makeParticles( [ 'p_smoke' ] );
            emitter_smoke.setAlpha(0.2, 1, 1000);
            emitter_smoke.setScale(0.25, 0, 0.25, 0, 250);
            emitter_smoke.start(false, 1000, 50);

            var knipperlicht = game.add.sprite(locX + 100, locY + 100, 'knipperendlicht');
            knipperlicht.animations.add('knipper');
            knipperlicht.animations.play('knipper', 1, true);
            knipperlicht.animations.currentAnim.speed = 2;

            carSprites.push({
                sprite: sprite,
                lerp_x: locX,
                lerp_y: locY,
                lerp_angle: lerp_angle,
                orientation: orientation,
                emitter_smoke: emitter_smoke,
                knipperlicht: knipperlicht,
                knipper_x: knipper_x,
                knipper_y: knipper_y,
                route
            })
        },

        render: function () {
            for (var i = 0; i < carSprites.length; i++) {

                carSprites[i].sprite.x = Phaser.Math.linearInterpolation([carSprites[i].sprite.x, carSprites[i].lerp_x], 0.05);
                carSprites[i].sprite.y = Phaser.Math.linearInterpolation([carSprites[i].sprite.y, carSprites[i].lerp_y], 0.05);

                switch (carSprites[i].orientation) {
                    case "north":
                        carSprites[i].lerp_angle = 0;
                        particle_x = carSprites[i].sprite.x - 10
                        particle_y = carSprites[i].sprite.y + 45
                        break;
                    case "east":
                        carSprites[i].lerp_angle = 90;
                        particle_x = carSprites[i].sprite.x - 45
                        particle_y = carSprites[i].sprite.y - 10
                        break;
                    case "south":
                        carSprites[i].lerp_angle = 180;
                        particle_x = carSprites[i].sprite.x - 10
                        particle_y = carSprites[i].sprite.y - 45
                        break;
                    case "west":
                        carSprites[i].lerp_angle = -90;
                        particle_x = carSprites[i].sprite.x + 45
                        particle_y = carSprites[i].sprite.y - 10
                        break;
                }

                carSprites[i].emitter_smoke.emitX = particle_x;
                carSprites[i].emitter_smoke.emitY = particle_y;

                carSprites[i].sprite.angle = carSprites[i].lerp_angle;

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
                carSprites[c].knipperlicht.x = carSprites[c].sprite.x;
                carSprites[c].knipperlicht.y = carSprites[c].sprite.y;
            }

            

        },

        getCars: function () {
            return carSprites;
        },
        destroyAt: function (index) {
        }
    };
})();