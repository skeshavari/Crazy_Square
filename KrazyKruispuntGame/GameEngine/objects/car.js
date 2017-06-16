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

        update: function(carsFromModel) {
            for (c in cars) {
                cars[c].lerp_x = gridToScreenX(carsFromModel[c].getX());
                cars[c].lerp_y = gridToScreenY(carsFromModel[c].getY());
            }
        },

        getCars: function() {
            return cars;
        }
    };
})();
