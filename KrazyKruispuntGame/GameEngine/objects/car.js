Car = (function() {
    // private code komt hier...
    var cars = [];

    return {
        // public code komt hier...
        reset: function() {
            cars = [];
        },

        create: function(locX, locY) {
            cars.push({ sprite: game.add.sprite(locX, locY, 'police'), lerp_x: locX, lerp_y: locY })
        },

        render: function() {
            for (c in cars) {
                cars[c].sprite.x = Phaser.Math.linearInterpolation([cars[c].sprite.x, cars[c].lerp_x], 0.05);
                cars[c].sprite.y = Phaser.Math.linearInterpolation([cars[c].sprite.y, cars[c].lerp_y], 0.05);
            }
        },

        update: function(carsFromModel) {
            for (c in cars) {
                cars[c].lerp_x = toGridX(carsFromModel[c].getX());
                cars[c].lerp_y = toGridY(carsFromModel[c].getY());
            }
        },

        getCars: function() {
            return cars;
        }
    };
})();
