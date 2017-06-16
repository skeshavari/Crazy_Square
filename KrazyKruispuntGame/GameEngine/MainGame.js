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

    carsFromModel = Game.getCars();
    for (c in carsFromModel) {
        Car.create(gridToScreenX(carsFromModel[c].getX()), gridToScreenY(carsFromModel[c].getY()));
    }
    carSprites = Car.getCars();

    trafficlights = Game.getTrafficLights();
    for (tl in trafficlights) {
        TrafficLight.plaatsTrafficLight(trafficlights[tl].getColor(), gridToScreenX(trafficlights[tl].getX()), gridToScreenY(trafficlights[tl].getY()));
    }

    game.time.events.repeat(Phaser.Timer.SECOND * 0.5, 3, updateCars, this);
}

function updateCars() {
	for (c in carsFromModel) {
		carsFromModel[c].update();
		Car.update(carsFromModel);
	}
}

function update() {
    TrafficLight.drawLights();
    TrafficLight.update(trafficlights);

    for (c in carSprites) {
    	carSprites[c].sprite.x = Phaser.Math.linearInterpolation([carSprites[c].sprite.x, carSprites[c].lerp_x], 0.05);
    	carSprites[c].sprite.y = Phaser.Math.linearInterpolation([carSprites[c].sprite.y, carSprites[c].lerp_y], 0.05);
    }

    game.debug.text("Next update: " + game.time.events.duration.toFixed(0), 32, 32);
    game.debug.text("carSprite.y: " + carSprites[0].sprite.y, 32, 64);
    game.debug.text("carFromModel.y: " + carsFromModel[0].getY(), 32, 96);
}