Crossroad = (function() {

    var graphics;

    return {
        // public code komt hier...
        create: function() {
            game.add.sprite(0, 0, 'spr_kruispunt');
        },

        getGraphics: function() {
            return graphics;
        }
    };
})();