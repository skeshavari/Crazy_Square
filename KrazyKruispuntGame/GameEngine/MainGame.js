/**
 * Created by phijma on 6/9/2017.
 */

var game = new Phaser.Game(600, 600, Phaser.AUTO, gameScreenDiv, { preload: preload, create: create, update: update });
var red = 0xFF0000, yellow = 0xFFFF00, green = 0x00FF00;

function preload() {
    game.load.image('car', 'images/car.png');
}

var crossroad;
var car;
var trafficlight;

function create() {
    crossroad = new Crossroad(game);
    trafficlight = new Trafficlight(red, gridToScreenX(4), gridToScreenY(4));
    car = new Car(game, gridToScreenX(0), gridToScreenY(1));

}

function update() {

}