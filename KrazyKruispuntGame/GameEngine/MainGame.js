/**
 * Created by phijma on 6/9/2017.
 */

var game = new Phaser.Game(600, 600, Phaser.AUTO, gameScreenDiv, {
    preload: preload,
    create: create,
    update: update
});
var red = 0xFF0000,
    yellow = 0xFFFF00,
    green = 0x00FF00;

function preload() {
    game.load.image('ambulance', 'GameEngine/assets/images/ambulance.png');
    game.load.image('audi_yellow', 'GameEngine/assets/images/audi_yellow.png');
    game.load.image('audi_blue', 'GameEngine/assets/images/audi_blue.png');
    game.load.image('audi_metallic', 'GameEngine/assets/images/audi_metallic.png');
    game.load.image('audi', 'GameEngine/assets/images/audi.png');
    game.load.image('oldtimer', 'GameEngine/assets/images/oldtimer.png');
    game.load.image('police', 'GameEngine/assets/images/police.png');
    game.load.image('taxi', 'GameEngine/assets/images/taxi.png');
    game.load.image('spr_kruispunt', 'GameEngine/assets/images/kruispunt.png');
    game.load.image('light_red', 'GameEngine/assets/images/light_red.png');
    game.load.image('light_green', 'GameEngine/assets/images/light_green.png');
    game.load.image('p_smoke', 'GameEngine/assets/particles/smoke.png');
    
    game.load.script('BlurX', 'https://cdn.rawgit.com/photonstorm/phaser/master/v2/filters/BlurX.js');
    game.load.script('BlurY', 'https://cdn.rawgit.com/photonstorm/phaser/master/v2/filters/BlurY.js');

    game.load.spritesheet('knipperendlicht', 'GameEngine/assets/particles/knipperlicht.png', 10, 10, 2);
    game.load.spritesheet('p_explosion', 'GameEngine/assets/particles/explosion.png', 65, 65);

    game.load.image('p_knipperlicht', 'GameEngine/assets/particles/knipperlicht.png');
    game.time.advancedTiming = true;
}

var crossroad;
var trafficlights;
var carsFromModel;
var filter;
var blurX;
var blurY;

function create() {
    var fragmentSrc = [

        "precision mediump float;",

        "varying vec2 vTextureCoord;",
        "uniform sampler2D uSampler;",

        "void main(void) {",

            "vec4 texColor = texture2D(uSampler, vTextureCoord);",

            "if (vTextureCoord.x < 1.0) {",
                "if (texColor.b > 0.0) {",
                    "texColor = vec4(0.0, 0.0, 0.0, 0.75);",
                "}",
            "}",
     
            "gl_FragColor = texColor;",

        "}"
    ];

    filter = new Phaser.Filter(game, null, fragmentSrc);

    blurX = game.add.filter('BlurX');
    blurY = game.add.filter('BlurY');

    blurX.blur = 10;
    blurY.blur = 10;

    game.add.sprite(0, 0, 'spr_kruispunt');

    // Getting the cars from the model and creating sprites:
    carsFromModel = Game.getCars();
    for (i = 0; i < carsFromModel.length; i++) {
        Car.create(toGridX(carsFromModel[i].getX()) + 50, toGridY(carsFromModel[i].getY()) + 50, carsFromModel[i].getDirection(), carsFromModel[i].getRoute());
    }

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
    var index = Game.update();
    var carsFromModel = Game.getCars();
    Car.update(carsFromModel, index);
}

function update() {
    colorChanged = TrafficLight.colorChanged(trafficlights);

    if (colorChanged) {
        TrafficLight.render(trafficlights);
    }

    Car.render();

    game.debug.text("Next update: " + timer.duration.toFixed(0), 32, 30);
    game.debug.text("FPS: " + game.time.fps, 32, 60);
    /*game.debug.text("carsSprites: " + Car.getCars().length, 32, 96); */
    game.debug.text("collisionsCount: " + Game.getCollisionCounter(), 32, 90);
    game.debug.text("carsInDomain: " + Game.getCars().length, 32, 120);
    game.debug.text("randomSpawn: " + Game.getRandomSpawn(), 32, 150);
    game.debug.text("randomRatio: " + Game.getSpawnRatio(), 32, 180);
    if (Car.getCars()[1] !== undefined) {
        game.debug.text("ROUTE: " + Car.getCars()[1].route, 32, 210);
    }
    game.debug.text("Crashes allowed:", 412, 30);
    game.debug.text(Game.getCollisionCounter() + " / " + Game.getMaximumCrashesAllowed(), 452, 50);
    game.debug.text("Cars Rescued:", 412, 80);
    game.debug.text("$ " + (Game.getTotalCarsSafelyPassed() * 1500), 452, 100);
}