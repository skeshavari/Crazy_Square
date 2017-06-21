Car = (function() {
    // private code komt hier...
    var cars = [];

    return {
        // public code komt hier...
        reset: function() {
            cars = [];
        },

        create: function(locX, locY, orientation) {
            var sprite = game.add.sprite(locX, locY, 'police');
            sprite.anchor.setTo(0.5, 0.5);
            switch (orientation) {
                case "north":   sprite.angle = 0;
                                lerp_angle = 0;
                                break;
                case "east":    sprite.angle = 90;
                                lerp_angle = 90;
                                break;
                case "south":   sprite.angle = 180;
                                lerp_angle = 180;
                                break;
                case "west":    sprite.angle = -90;
                                lerp_angle = -90;
                                break;
            }
            cars.push({ sprite: sprite, lerp_x: locX, lerp_y: locY, lerp_angle: lerp_angle, orientation: orientation })
        },

        render: function() {
            for (c in cars) {
                cars[c].sprite.x = Phaser.Math.linearInterpolation([cars[c].sprite.x, cars[c].lerp_x], 0.05);
                cars[c].sprite.y = Phaser.Math.linearInterpolation([cars[c].sprite.y, cars[c].lerp_y], 0.05);

                switch (cars[c].orientation) {
                    case "north":   cars[c].lerp_angle = 0;
                                    break;
                    case "east":    cars[c].lerp_angle = 90;
                                    break;
                    case "south":   cars[c].lerp_angle = 180;
                                    break;
                    case "west":    cars[c].lerp_angle = -90;
                                    break;
                }

                cars[c].sprite.angle = cars[c].lerp_angle;

                // if ((Math.abs(cars[c].sprite.angle - cars[c].lerp_angle) > 5)) {
                //     cars[c].sprite.angle = Phaser.Math.linearInterpolation([cars[c].sprite.angle, cars[c].lerp_angle], 0.02);
                // } else {
                //     cars[c].sprite.angle = cars[c].lerp_angle;
                // }
            }
        },

        update: function(carsFromModel) {
            for (c in cars) {
                cars[c].lerp_x = toGridX(carsFromModel[c].getX()) + 50;
                cars[c].lerp_y = toGridY(carsFromModel[c].getY()) + 50;
                cars[c].orientation = carsFromModel[c].getDirection();
            }
        },

        getCars: function() {
            return cars;
        }
    };
})();
