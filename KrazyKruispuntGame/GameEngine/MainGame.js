/**
 * Created by phijma on 6/9/2017.
 */

var game = new Phaser.Game(600, 600, Phaser.AUTO, gameScreenDiv, { preload: preload, create: create, update: update });
var red = 0xFF0000, yellow = 0xFFFF00, green = 0x00FF00;

function preload() {
    game.load.image('police', 'GameEngine/assets/images/police.png');
    game.time.advancedTiming = true;
}

var crossroad;
var trafficlights;
var carsFromModel;
var carSprites;

function create() {
    crossroad = Crossroad.create();

    // Getting the cars from the model and creating sprites:
    carsFromModel = Game.getCars();
    for (c in carsFromModel) {
        Car.create(toGridX(carsFromModel[c].getX()) + 50, toGridY(carsFromModel[c].getY()) + 50, carsFromModel[c].getDirection());
    }
    carSprites = Car.getCars();

    // Getting the trafficlights from the model and creating sprites:
    trafficlights = Game.getTrafficLights();
    for (tl in trafficlights) {
        TrafficLight.plaatsTrafficLight(trafficlights[tl].getColor().toLowerCase(), toGridX(trafficlights[tl].getX()), toGridY(trafficlights[tl].getY()));
    }
    TrafficLight.render(trafficlights);

    // The time interval that's asks the domain to update it's state.
    timer = game.time.create(false);
    timer.loop(500, updateCars, this);
    timer.start();
}

function updateCars() {
	for (c in carsFromModel) {
		carsFromModel[c].update();
		Car.update(carsFromModel);
	}
}

function update() {
    colorChanged = TrafficLight.colorChanged(trafficlights);

    if (colorChanged) {
        TrafficLight.render(trafficlights);
    }

    Car.render();

    game.debug.text("Next update: " + timer.duration.toFixed(0), 32, 32);
    game.debug.text("FPS: " + game.time.fps, 32, 64);
}