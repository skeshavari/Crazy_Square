TrafficLight = (function() {
//var red = 0xFF0000, yellow = 0xFFFF00, green = 0x00FF00;
var colour = red, trafficLightGraphics;

changeColour(colour) {

}

  return {
    make = function(colour) {
      //trafficLightGraphics.destroy();
      trafficLightGraphics = game.add.graphics(0, 0);
      trafficLightGraphics.beginFill(colour)
        trafficLightGraphics.drawRect(225, 125, 50, 50);
        trafficLightGraphics.endFill();
        return trafficLightGraphics;
    }
  }
})

/*function green() {
  //trafficLightGraphics.destroy();
  trafficLightGraphics = game.add.graphics(0, 0);
  trafficLightGraphics.beginFill(0x00FF00)
    trafficLightGraphics.drawRect(225, 125, 50, 50);
    trafficLightGraphics.endFill();
}

function yellow() {
  trafficLightGraphics.destroy();
  trafficLightGraphics = game.add.graphics(0, 0);
  trafficLightGraphics.beginFill(0xFFFF00)
    trafficLightGraphics.drawRect(225, 125, 50, 50);
    trafficLightGraphics.endFill();
}

function red() {
  trafficLightGraphics.destroy();
  trafficLightGraphics = game.add.graphics(0, 0);
  trafficLightGraphics.beginFill(0xFF0000)
    trafficLightGraphics.drawRect(225, 125, 50, 50);
    trafficLightGraphics.endFill();
}*/
