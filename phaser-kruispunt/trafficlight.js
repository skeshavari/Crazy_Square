function TrafficLight(game, colour) {
var red = 0xFF0000, yellow = 0xFFFF00, green = 0x00FF00;
var colour, trafficLightGraphics = new Object();

    trafficLightGraphics = game.add.graphics(0, 0);
    trafficLightGraphics.beginFill(colour)
    trafficLightGraphics.drawRect(225, 125, 50, 50);
    trafficLightGraphics.endFill();
    }

    // updateColour = function(colour) {
    //     trafficLightGraphics.destroy();
    //     trafficLightGraphics = game.add.graphics(0, 0);
    //     trafficLightGraphics.beginFill(colour)
    //     trafficLightGraphics.drawRect(225, 125, 50, 50);
    //     trafficLightGraphics.endFill();
    //     return trafficLightGraphics;
    // }
//   }
// })

/*green = function() {
    //trafficLightGraphics.destroy();
    trafficLightGraphics = game.add.graphics(0, 0);
    trafficLightGraphics.beginFill(0x00FF00)
    trafficLightGraphics.drawRect(225, 125, 50, 50);
    trafficLightGraphics.endFill();
}

yellow = function() {
    trafficLightGraphics.destroy();
    trafficLightGraphics = game.add.graphics(0, 0);
    trafficLightGraphics.beginFill(0xFFFF00)
    trafficLightGraphics.drawRect(225, 125, 50, 50);
    trafficLightGraphics.endFill();
}

red = function() {
    trafficLightGraphics.destroy();
    trafficLightGraphics = game.add.graphics(0, 0);
    trafficLightGraphics.beginFill(0xFF0000)
    trafficLightGraphics.drawRect(225, 125, 50, 50);
    trafficLightGraphics.endFill();
}*/
