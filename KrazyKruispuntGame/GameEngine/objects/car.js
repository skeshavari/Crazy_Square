Car = (function() {
    // private code komt hier...
    var cars = [];

    return {
        // public code komt hier...
        reset: function() {
            cars = [];
        },

        createCar: function(locX, locY) {
            cars.push({ sprite: game.add.sprite(locX, locY, 'police'), lerp_x: locX, lerp_y: locY })
        },

        update: function(cars) {

        },

        getCars: function() {
            return cars;
        }
    };
})();
