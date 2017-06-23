/**
 * Created by phijma on 6/9/2017.
 */

TrafficLight = (function() {
    // private code komt hier...

    var graphicalLights = [];
    var red = 0xFF0000, yellow = 0xFFFF00, green = 0x00FF00;

    return {
        // public code komt hier...

        colorChanged: function(trafficlights) {
            for (tl in trafficlights) {
                if (trafficlights[tl].getColor().toLowerCase() != graphicalLights[tl].color.toLowerCase()) {
                    return true;
                }
            }
            return false;
        },

        reset: function() {
            graphicalLights = [];
        },

        plaatsTrafficLight: function(color, locX, locY) {
            var sprite = game.add.sprite(locX, locY, 'light_red');

            graphicalLights.push({ sprite: sprite, 
                color: color, 
                x: locX, 
                y: locY 
            });
        },

        render: function(trafficlights) {
                for (tl in trafficlights) {

                    switch(trafficlights[tl].getColor().toLowerCase()) {
                        case "red":
                            real_color = red;
                            break;
                        case "yellow":
                            real_color = yellow;
                            break;
                        case "green":
                            real_color = green;
                            break;
                    }
                graphicalLights[tl].color = trafficlights[tl].getColor();
            }
        },

        getLights: function() {
            return graphicalLights;
        },
    };
})();
