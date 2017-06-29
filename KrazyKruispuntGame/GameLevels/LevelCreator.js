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
    Game.makeCar(2, 0, "south", "forward");

    Game.setTotalSpawns(50);
    Game.changeSpawnChance(0.75);
    Game.setMaximumCrashesAllowed(5);
    trafficLightTop = Game.getTrafficLights()[0];
    trafficLightRight = Game.getTrafficLights()[2];
    trafficLightLeft = Game.getTrafficLights()[1];
    trafficLightBottom = Game.getTrafficLights()[3];
}

function createLevelHard() {

    Game.setMaximumCrashesAllowed(3);
    Game.setTotalSpawns(100);
    Game.changeSpawnChance(1);

    Game.makeCar(3, 5, "north", "left");
    Game.makeCar(2, 0, "south", "forward");
    Game.makeCar(2, -1, "west", "right");

    trafficLightTop = Game.getTrafficLights()[0];
    trafficLightRight = Game.getTrafficLights()[2];
    trafficLightLeft = Game.getTrafficLights()[1];
    trafficLightBottom = Game.getTrafficLights()[3];
}

function createLevelChallengeMode() {
    
    Game.setTotalSpawns(9999999);
    Game.changeSpawnChance(1);
    Game.setMaximumCrashesAllowed(3);

    Game.makeCar(3, 5, "north", "left");
    Game.makeCar(2, 0, "south", "forward");
    Game.makeCar(2, -1, "west", "right");
    Game.makeCar(2, -2, "east", "left");

    
    trafficLightTop = Game.getTrafficLights()[0];
    trafficLightRight = Game.getTrafficLights()[2];
    trafficLightLeft = Game.getTrafficLights()[1];
    trafficLightBottom = Game.getTrafficLights()[3];

}

function createLevelInsaneChallengeMode() {

    Game.setTotalSpawns(9999999);
    Game.changeSpawnChance(1);
    Game.setMaximumCrashesAllowed(0);

    Game.makeCar(3, 5, "north", "left");
    Game.makeCar(2, 0, "south", "forward");
    Game.makeCar(2, -1, "west", "right");
    Game.makeCar(2, -2, "east", "left");

    trafficLightTop = Game.getTrafficLights()[0];
    trafficLightRight = Game.getTrafficLights()[2];
    trafficLightLeft = Game.getTrafficLights()[1];
    trafficLightBottom = Game.getTrafficLights()[3];

}