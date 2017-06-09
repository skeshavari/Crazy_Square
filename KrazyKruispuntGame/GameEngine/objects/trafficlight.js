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

    switch(color.toLowerCase()) {
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

    return Trafficlight(real_color, gridToScreenX(this.tempX), gridToScreenY(this.tempY));
};