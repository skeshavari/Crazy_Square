function TrafficLight(colour, locX, locY) {
var red = 0xFF0000, yellow = 0xFFFF00, green = 0x00FF00;
var colour;
var queue = [];
locX = locX + 25;
locY = locY + 25;

    trafficLightGraphics = game.add.graphics(0, 0);
    trafficLightGraphics.beginFill(colour)
    trafficLightGraphics.drawRect(locX, locY, 50, 50);
    trafficLightGraphics.endFill();

    this.addToQueue = function addToQueue() {
      queue.push("beep");
      queue.push("beepbeep");
      return queue;
    }
};
