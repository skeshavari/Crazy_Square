/**
 * Created by phijma on 6/9/2017.
 */

TrafficLight = (function() {
    // private code komt hier...

    var graphicalLights = [];
    var trafficLightGraphics;
    var red = 0xFF0000, yellow = 0xFFFF00, green = 0x00FF00;

    return {
        // public code komt hier...

        reset: function() {
            graphicalLights = [];
        },

        plaatsTrafficLight: function(color, locX, locY) {
            graphicalLights.push({ color: color, x: locX, y: locY})
        },

        update: function(trafficlights) {
            this.trafficLightGraphics.destroy();

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

                trafficLightGraphics = game.add.graphics(0, 0);
                trafficLightGraphics.beginFill(real_color);
                trafficLightGraphics.drawRect(graphicalLights[tl].x + 25, graphicalLights[tl].y + 25, 50, 50);
                trafficLightGraphics.endFill();
            }


        },

        drawLights: function() {
            for (tl in graphicalLights) {
                this.trafficLightGraphics = game.add.graphics(0, 0);
                this.trafficLightGraphics.beginFill(graphicalLights[tl].color);
                this.trafficLightGraphics.drawRect(graphicalLights[tl].x + 25, graphicalLights[tl].y + 25, 50, 50);
                this.trafficLightGraphics.endFill();
            }
        },

        getLights: function() {
            return graphicalLights;
        }
    };
})();
