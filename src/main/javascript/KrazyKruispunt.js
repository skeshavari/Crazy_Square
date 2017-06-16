/**
 * Created by ckyoung on 19-May-17.
 */
Game = (function () {
    var cars = [];
    var lights = [];

    var TrafficLight = function (_x, _y) {
        var state = {
            locX: _x,
            locY: _y,
            color: "RED"
        }
        return {
            setColor: function (_color) {
                state.color = _color;
            },
            getColor: function () {
                return state.color;
            },
            getX: function () {
                return state.locX;
            },
            getY: function () {
                return state.locY;
            }
        }
    };

    var makeTrafficLight = function (x, y) {
        lights.push(TrafficLight(x, y))
    };

    (function () {
        makeTrafficLight(1, 1);
        makeTrafficLight(1, 4);
        makeTrafficLight(4, 1);
        makeTrafficLight(4, 4);
    })();

    var Car = function (_x, _y, _facing) {
        var state = {
            locX: _x,
            locY: _y,
            direction: _facing,
            isMainCar: mainCar,
            turnLeft: false,
            turnRight: false,
        }

        function moveForward(distance) {
            switch (this.direction) {
                case "north":
                    this.locY += distance;
                    break;
                case "south":
                    this.locY -= distance;
                    break;
                case "east":
                    this.locX += distance;
                    break;
                case "west":
                    this.locX -= distance;
                    break;
            }
        }

        function turnLeft() {
            switch (this.direction) {
                case "north":
                    this.direction = "west"
                    break;
                case "south":
                    this.direction = "east";
                    break;
                case "east":
                    this.direction = "north";
                    break;
                case "west":
                    this.direction = "south";
            }
        }

        function turnRight() {
            switch (this.direction) {
                case "north":
                    this.direction = "east"
                    break;
                case "south":
                    this.direction = "west";
                    break;
                case "east":
                    this.direction = "south";
                    break;
                case "west":
                    this.direction = "north";
            }
        }

        return {
            getX: function () {
                return this.locX;
            },
            getY: function () {
                return this.locY;
            },
            getDirection: function () {
                return this.direction;
            }
        }
    }

    return {
        clearTest: function () {
            cars = [];
        },
        makeCar: function (x, y, facing) {
            cars.push(Car(x, y, facing));
        },
        getCars: function () {
            return cars;
        },
        getTrafficLights: function () {
            return lights;
        }
    };
})();

var trafficLightTop = Game.getTrafficLights()[0];
var trafficLightRight = Game.getTrafficLights()[1];
var trafficLightLeft = Game.getTrafficLights()[2];
var trafficLightBottom = Game.getTrafficLights()[3];
