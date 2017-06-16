Car = (function() {
    // private code komt hier...
    var cars = [];
    var carSprite;

    return {
        // public code komt hier...
        reset: function() {
            cars = [];
        },

        createCar: function(locX, locY) {
            cars.push({ x: locX, y: locY})
        },

        update: function(cars) {
            for (car in cars) {

            }
        },

        createSprites: function() {
            for (car in cars) {
                this.trafficLightGraphics = ame.add.sprite(0, 0, 'car');
            }
        },

        getCars: function() {
            return cars;
        }
    };
})();
