Game.makeTrafficLight(1, 1)
Game.makeTrafficLight(4, 1)
Game.makeTrafficLight(1, 4)
Game.makeTrafficLight(4, 4)

var trafficLightTop = Game.getTrafficLights()[0]
var trafficLightRight = Game.getTrafficLights()[1]
var trafficLightLeft = Game.getTrafficLights()[2]
var trafficLightBottom = Game.getTrafficLights()[3]

var updaterateMillisecondPerSecond = 600;

Game.setRandomSpawn(true)

function createLevelEasy() {
    Game.setTotalSpawns(25)
    Game.changeSpawnChance(0.5)

    Game.makeCar(3, 5, 'north', 'left')
}

function createLevelMedium() {
    Game.setMaximumCrashesAllowed(5)
    Game.setTotalSpawns(50)
    Game.changeSpawnChance(0.75)

    Game.makeCar(3, 5, "north", "left");
    Game.makeCar(2, 0, "south", "forward");
}

function createLevelHard() {
    Game.setMaximumCrashesAllowed(3);
    Game.setTotalSpawns(100);
    Game.changeSpawnChance(1);

    updaterateMillisecondPerSecond = 500;

    Game.makeCar(3, 5, "north", "left");
    Game.makeCar(2, 0, "south", "forward");
    Game.makeCar(2, -1, "west", "right");
}

function createLevelChallengeMode() {
    Game.setMaximumCrashesAllowed(3)
    Game.setTotalSpawns(9999999)
    Game.changeSpawnChance(1)

    updaterateMillisecondPerSecond = 400;

    Game.makeCar(3, 5, "north", "left");
    Game.makeCar(2, 0, "south", "forward");
    Game.makeCar(2, -1, "west", "right");
    Game.makeCar(2, -2, "east", "left");
}

function createLevelInsaneChallengeMode() {
    Game.setMaximumCrashesAllowed(1);
    Game.setTotalSpawns(9999999);
    Game.changeSpawnChance(1);

    updaterateMillisecondPerSecond = 300;

    Game.makeCar(3, 5, "north", "left");
    Game.makeCar(2, 0, "south", "forward");
    Game.makeCar(2, -1, "west", "right");
    Game.makeCar(2, -2, "east", "left");
}