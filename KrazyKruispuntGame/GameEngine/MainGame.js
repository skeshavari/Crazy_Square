/**
 * Created by phijma on 6/9/2017.
 */

var game = new Phaser.Game(600, 600, Phaser.AUTO, gameScreenDiv, { preload: preload, create: create, update: update });
var red = 0xFF0000, yellow = 0xFFFF00, green = 0x00FF00;

function preload() {
    game.load.image('car', 'images/car.png');
}

var crossroad;
var trafficlights;
var cars;

function create() {
    crossroad = new Crossroad(game);

    car = 

    trafficlights = Game.getTrafficLights();
    for (tl in trafficlights) {
        TrafficLight.plaatsTrafficLight(trafficlights[tl].getColor(), gridToScreenX(trafficlights[tl].getX()), gridToScreenY(trafficlights[tl].getY()));
    }
}

function update() {
    TrafficLight.drawLights();
    TrafficLight.update(trafficlights);
}