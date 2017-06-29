Game.makeTrafficLight(1, 1);
Game.makeTrafficLight(1, 4);
Game.makeTrafficLight(4, 1);
Game.makeTrafficLight(4, 4);

var trafficLightTop;
var trafficLightRight;
var trafficLightLeft;
var trafficLightBottom;

Game.setRandomSpawn(true);

function createLevelEasy() {

    Game.makeCar(3, 5, "north", "left");
    Game.setTotalSpawns(25);
    Game.changeSpawnChance(0.5);

    trafficLightTop = Game.getTrafficLights()[0];
    trafficLightRight = Game.getTrafficLights()[2];
    trafficLightLeft = Game.getTrafficLights()[1];
    trafficLightBottom = Game.getTrafficLights()[3];
}

function createLevelMedium() {
    Game.makeCar(3, 5, "north", "left");
    Game.makeCar(2, 0, "south", "left");
    Game.makeCar(2, -1, "south", "left");
    Game.makeCar(2, -2, "south", "left");

    Game.setTotalSpawns(50);
    Game.changeSpawnChance(0.75);

    trafficLightTop = Game.getTrafficLights()[0];
    trafficLightRight = Game.getTrafficLights()[2];
    trafficLightLeft = Game.getTrafficLights()[1];
    trafficLightBottom = Game.getTrafficLights()[3];
}

function createLevelHard() {
    Game.makeCar(3, 5, "north", "left");
    Game.makeCar(2, 0, "south", "left");
    Game.makeCar(2, -1, "south", "left");
    Game.makeCar(2, -2, "south", "left");

    Game.setTotalSpawns(100);
    Game.changeSpawnChance(1);

    trafficLightTop = Game.getTrafficLights()[0];
    trafficLightRight = Game.getTrafficLights()[2];
    trafficLightLeft = Game.getTrafficLights()[1];
    trafficLightBottom = Game.getTrafficLights()[3];
}

function createLevelChallengeMode() {
    
    Game.setTotalSpawns(9999999);
    Game.changeSpawnChance(1);

    Game.makeMainCar(2, 0, "south", "left");


    trafficLightTop = Game.getTrafficLights()[0];
    trafficLightRight = Game.getTrafficLights()[2];
    trafficLightLeft = Game.getTrafficLights()[1];
    trafficLightBottom = Game.getTrafficLights()[3];
}