var Trafficlight = function(colour, locX, locY) {

    var red = 0xFF0000, yellow = 0xFFFF00, green = 0x00FF00;
    var colour;

    x = locX + 25;
    y = locY + 25;

    trafficLightGraphics = game.add.graphics(0, 0);
    trafficLightGraphics.beginFill(colour)
    trafficLightGraphics.drawRect(x, y, 50, 50);
    trafficLightGraphics.endFill();

    return this;
};

Trafficlight.prototype.setColor = function(color) {
    trafficLightGraphics.destroy();
    return Trafficlight(color, gridToScreenX(4), gridToScreenY(4));
};