Game.makeTrafficLight(1, 1)
Game.makeTrafficLight(1, 4)
Game.makeTrafficLight(4, 1)
Game.makeTrafficLight(4, 4)

var trafficLightTop = Game.getTrafficLights()[0]
var trafficLightRight = Game.getTrafficLights()[1]
var trafficLightLeft = Game.getTrafficLights()[2]
var trafficLightBottom = Game.getTrafficLights()[3]

Game.setRandomSpawn(true)

function createLevelEasy() {
    Game.makeCar(3, 5, 'north', 'left')
    Game.setTotalSpawns(25)
    Game.changeSpawnChance(0.5)
}

function createLevelMedium() {
    Game.makeCar(3, 5, 'north', 'left')
    Game.makeCar(2, 0, 'south', 'left')
    Game.makeCar(2, -1, 'south', 'left')
    Game.makeCar(2, -2, 'south', 'left')

    Game.setTotalSpawns(50)
    Game.changeSpawnChance(0.75)
    Game.setMaximumCrashesAllowed(5)
}

function createLevelHard() {
    Game.makeCar(3, 5, 'north', 'left')
    Game.makeCar(2, 0, 'south', 'left')
    Game.makeCar(2, -1, 'south', 'left')
    Game.makeCar(2, -2, 'south', 'left')
    Game.setMaximumCrashesAllowed(3)
    Game.setTotalSpawns(100)
    Game.changeSpawnChance(1)
}

function createLevelChallengeMode() {
    Game.setTotalSpawns(9999999)
    Game.changeSpawnChance(1)
    Game.setMaximumCrashesAllowed(3)

    Game.makeMainCar(2, 0, 'south', 'left')
}

function createLevelInsaneChallengeMode() {
    Game.setTotalSpawns(9999999)
    Game.changeSpawnChance(1)
    Game.setMaximumCrashesAllowed(0)

    Game.makeMainCar(2, 0, 'south', 'left')

    trafficLightTop = Game.getTrafficLights()[0]
    trafficLightRight = Game.getTrafficLights()[2]
    trafficLightLeft = Game.getTrafficLights()[1]
}