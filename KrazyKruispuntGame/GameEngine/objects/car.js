Car = (function () {
    // private code komt hier...
    var carSprites = [];

    function playExplosion(spriteX, spriteY) {
        var location = game.add.sprite(spriteX, spriteY, 'p_explosion');
        location.scale.set(2, 2);
        location.anchor.setTo(0.5, 0.5);
        location.animations.add('p_explosion');
        location.animations.play('p_explosion', 30, false, true);
    }

    return {
        // public code komt hier...
        reset: function () {
            carSprites = [];
        },

        create: function (locX, locY, orientation, route) {
            cars = ['audi', 'audi_metallic', 'audi_yellow', 'audi_blue', 'ambulance']
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

            var knipper_x = sprite.x + 25;
            var knipper_y = sprite.x + 25;


            if (route === "forward") {
                knipperlicht = undefined;
            } else {
                var knipperlicht = game.add.sprite(knipper_x, knipper_y, 'knipperendlicht');
                knipperlicht.animations.add('knipper');
                knipperlicht.animations.play('knipper', 1, true);
                knipperlicht.animations.currentAnim.speed = 2;
            }
                    
            var emitter_smoke = game.add.emitter(game.world.centerX, game.world.centerY, 400);
            emitter_smoke.makeParticles(['p_smoke']);
            emitter_smoke.setAlpha(0.2, 1, 1000);
            emitter_smoke.setScale(0.25, 0, 0.25, 0, 250);
            emitter_smoke.start(false, 1000, 50);


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
                route: route
            });
        },

        render: function () {
            for (var i = 0; i < carSprites.length; i++) {
                carSprites[i].sprite.x =
                    Phaser.Math.linearInterpolation([carSprites[i].sprite.x, carSprites[i].lerp_x], 0.05);
                carSprites[i].sprite.y =
                    Phaser.Math.linearInterpolation([carSprites[i].sprite.y, carSprites[i].lerp_y], 0.05);

                switch (carSprites[i].orientation) {
                    case "north":
                        carSprites[i].lerp_angle = 0;
                        particle_x = carSprites[i].sprite.x - 10;
                        particle_y = carSprites[i].sprite.y + 45;
                        break;
                    case "east":
                        carSprites[i].lerp_angle = 90;
                        particle_x = carSprites[i].sprite.x - 45;
                        particle_y = carSprites[i].sprite.y - 10;
                        break;
                    case "south":
                        carSprites[i].lerp_angle = 180;
                        particle_x = carSprites[i].sprite.x - 10;
                        particle_y = carSprites[i].sprite.y - 45;
                        break;
                    case "west":
                        carSprites[i].lerp_angle = -90;
                        particle_x = carSprites[i].sprite.x + 45;
                        particle_y = carSprites[i].sprite.y - 10;
                        break;
                }

                carSprites[i].emitter_smoke.emitX = particle_x;
                carSprites[i].emitter_smoke.emitY = particle_y;

                // KNIPPERLICHTEN GEDOE:
                switch (carSprites[i].route) {

                    case "left":

                        switch (carSprites[i].orientation) {
                            case "south":
                                carSprites[i].knipper_x = carSprites[i].sprite.x + 10;
                                carSprites[i].knipper_y = carSprites[i].sprite.y + 25;
                                break;
                            case "north":
                                carSprites[i].knipper_x = carSprites[i].sprite.x - 20;
                                carSprites[i].knipper_y = carSprites[i].sprite.y - 32;
                                break;
                            case "east":
                                carSprites[i].knipper_x = carSprites[i].sprite.x + 23;
                                carSprites[i].knipper_y = carSprites[i].sprite.y - 20;
                                break;
                            case "west":
                                carSprites[i].knipper_x = carSprites[i].sprite.x - 30;
                                carSprites[i].knipper_y = carSprites[i].sprite.y + 10;
                                break;
                        }

                        break;

                    case "right":

                        switch (carSprites[i].orientation) {
                            case "south":
                                carSprites[i].knipper_x = carSprites[i].sprite.x - 10;
                                carSprites[i].knipper_y = carSprites[i].sprite.y + 25;
                                break;
                            case "north":
                                carSprites[i].knipper_x = carSprites[i].sprite.x + 10;
                                carSprites[i].knipper_y = carSprites[i].sprite.y - 32;
                                break;
                            case "east":
                                carSprites[i].knipper_x = carSprites[i].sprite.x + 20;
                                carSprites[i].knipper_y = carSprites[i].sprite.y + 10;
                                break;
                            case "west":
                                carSprites[i].knipper_x = carSprites[i].sprite.x - 30;
                                carSprites[i].knipper_y = carSprites[i].sprite.y - 20;
                                break;
                        }

                        break;
                }

                if (carSprites[i].knipperlicht !== undefined) {
                    carSprites[i].knipperlicht.x = carSprites[i].knipper_x;
                    carSprites[i].knipperlicht.y = carSprites[i].knipper_y;
                }

                carSprites[i].sprite.angle = carSprites[i].lerp_angle;
            }
        },
        //todo: make explosion particle again and use the spritesheet to animate particle
        update: function (carObjects, index) {
            if (index !== undefined && index.length !== 0) {
                for (var i = 0; i < index.length; i++) {
                    playExplosion(carSprites[index[i]].sprite.x, carSprites[index[i]].sprite.y);
                    carSprites[index[i]].sprite.destroy();
                    carSprites[index[i]].emitter_smoke.destroy();
                    if (carSprites[index[i]].knipperlicht !== undefined) {
                        carSprites[index[i]].knipperlicht.destroy();
                    }
                    carSprites.splice(index[i], 1);
                }
            }
            //Create additional car sprites
            if (carSprites.length !== carObjects.length) {
                var difference = carObjects.length - carSprites.length;
                for (var j = 0; j < difference; j++) {
                    this.create(toGridX(carObjects[carSprites.length + j].getX()) + 50,
                        toGridY(carObjects[carSprites.length + j].getY()) + 50,
                        carObjects[carSprites.length + j].getDirection(),
                        carObjects[carSprites.length + j].getRoute());
                }
            }
            //Update car position
            for (var c = 0; c < carObjects.length; c++) {
                carSprites[c].lerp_x = toGridX(carObjects[c].getX()) + 50;
                carSprites[c].lerp_y = toGridY(carObjects[c].getY()) + 50;

                // CHECK IF CAR HAS TURNED SO KNIPPERLICHT GOES OFF:
                if (carSprites[c].orientation !== carObjects[c].getDirection() && carSprites[c].knipperlicht !== undefined) {
                    carSprites[c].knipperlicht.destroy();
                }

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