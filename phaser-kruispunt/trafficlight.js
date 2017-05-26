function TrafficLight(colour) {
var red = 0xFF0000, yellow = 0xFFFF00, green = 0x00FF00;
var colour;

    trafficLightGraphics = game.add.graphics(0, 0);
    trafficLightGraphics.beginFill(colour)
    trafficLightGraphics.drawRect(225, 125, 50, 50);
    trafficLightGraphics.endFill();
    }
