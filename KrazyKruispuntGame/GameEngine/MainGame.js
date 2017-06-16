/**
 * Created by phijma on 6/9/2017.
 */

var game = new Phaser.Game(600, 600, Phaser.AUTO, gameScreenDiv, { preload: preload, create: create, update: update });
var red = 0xFF0000, yellow = 0xFFFF00, green = 0x00FF00;

function preload() {
    game.load.image('police', 'GameEngine/assets/images/police.png');
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
        Car.create(toGridX(carsFromModel[c].getX()), toGridY(carsFromModel[c].getY()));
    }
    carSprites = Car.getCars();

    // Getting the trafficlights from the model and creating sprites:
    trafficlights = Game.getTrafficLights();
    for (tl in trafficlights) {
        TrafficLight.plaatsTrafficLight(trafficlights[tl].getColor(), toGridX(trafficlights[tl].getX()), toGridY(trafficlights[tl].getY()));
    }

    // The time interval that's asks the domain to update it's state.
    timer = game.time.create(false);
    timer.loop(1000, updateCars, this);
    timer.start();
}

function updateCars() {
	for (c in carsFromModel) {
		carsFromModel[c].update();
		Car.update(carsFromModel);
	}
}

function update() {
	TrafficLight.render();
    TrafficLight.update(trafficlights);

    Car.render();

    game.debug.text("Next update: " + timer.duration.toFixed(0), 32, 32);
    game.debug.text("carSprite.y: " + carSprites[0].sprite.y, 32, 64);
    game.debug.text("carFromModel.y: " + carsFromModel[0].getY(), 32, 96);
}