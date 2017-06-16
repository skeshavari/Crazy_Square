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
var cars;

function create() {
    crossroad = new Crossroad(game);

    Car.createCar(300, 500);
    cars = Car.getCars();

    trafficlights = Game.getTrafficLights();
    for (tl in trafficlights) {
        TrafficLight.plaatsTrafficLight(trafficlights[tl].getColor(), gridToScreenX(trafficlights[tl].getX()), gridToScreenY(trafficlights[tl].getY()));
    }

    game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 3, updateCar, this);
}

function updateCar() {
	for (c in cars) {
		cars[c].lerp_y -= 100;
	}
}

function update() {
    TrafficLight.drawLights();
    TrafficLight.update(trafficlights);

    for (c in cars) {
    	cars[c].sprite.x = Phaser.Math.linearInterpolation([cars[c].sprite.x, cars[c].lerp_x], 0.05);
    	cars[c].sprite.y = Phaser.Math.linearInterpolation([cars[c].sprite.y, cars[c].lerp_y], 0.05);
    }

    game.debug.text("Next update: " + game.time.events.duration.toFixed(0), 32, 32);
}