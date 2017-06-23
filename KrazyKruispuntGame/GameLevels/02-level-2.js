Game.makeTrafficLight(1, 1);
Game.makeTrafficLight(1, 4);
Game.makeTrafficLight(4, 1);
Game.makeTrafficLight(4, 4);
Game.makeCar(3, 5, "north", "left");

Game.setTotalSpawns(100);
Game.changeSpawnChance(1);
var trafficLightTop = Game.getTrafficLights()[0];
var trafficLightRight = Game.getTrafficLights()[2];
var trafficLightLeft = Game.getTrafficLights()[1];
var trafficLightBottom = Game.getTrafficLights()[3];