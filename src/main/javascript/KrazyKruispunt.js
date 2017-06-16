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

    var Car = function (x = 3, y = 3, facing = "north", newRoute = "forward") {
        var state = {
            locX: x,
            locY: y,
            direction: facing,
            route: newRoute,
            hasTurned: false,
        }

        function forward(distance = 1) {
            switch (state.direction) {
                case "north":
                    state.locY -= distance;
                    break;
                case "south":
                    state.locY += distance;
                    break;
                case "east":
                    state.locX += distance;
                    break;
                case "west":
                    state.locX -= distance;
                    break;
            }
        }

        function turnLeft() {
            switch (state.direction) {
                case "north":
                    if (state.locX === 3 && state.locY === 2) {
                        state.direction = "west";
                    }
                    break;
                case "south":
                    if (state.locX === 2 && state.locY === 3) {
                        state.direction = "east";
                    }
                    break;
                case "east":
                    if (state.locX === 3 && state.locY === 3) {
                        state.direction = "north";
                    }
                    break;
                case "west":
                    if (state.locX === 2 && state.locY === 2) {
                        state.direction = "south";
                    }
                    break;
            }
            state.hasTurned = true;
        }

        function turnRight() {
            switch (state.direction) {
                case "north":
                    state.direction = "east"
                    break;
                case "south":
                    state.direction = "west";
                    break;
                case "east":
                    state.direction = "south";
                    break;
                case "west":
                    state.direction = "north";
            }
            state.hasTurned = true
        }

        function checkIfXLocIsCenter() {
            if (state.locX === 2 || state.locX === 3) {
                return true
            }
            return false
        }

        function checkIfYLocIsCenter() {
            if (state.locY === 2 || state.locY === 3) {
                return true
            }
            return false
        }

        function atValidLocation() {
            if (checkIfXLocIsCenter() && checkIfYLocIsCenter()) {
                return true
            }
            return false
        }

        function turnIfNeeded() {
            if (atValidLocation()) {
                switch (state.route) {
                    case "forward":
                        forward();
                        break;
                    case "left":
                        turnLeft();
                        break;
                    case "right":
                        turnRight();
                        break;
                }
            } else {
                forward();
            }
        }

        return {
            getX: function () {
                return state.locX;
            },
            getY: function () {
                return state.locY;
            },
            getDirection: function () {
                return state.direction;
            },
            update: function () {
                if (state.hasTurned) {
                    forward();
                } else {
                    turnIfNeeded();
                }
            },
            getRoute: function () {
                return state.route;
            },
            getHasTurned: function () {
                return state.hasTurned;
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
        },
        update: function () {
            for (var i = 0; i < cars.length; i++) {
                cars[i].update();
            }
        }
    };
})();

var trafficLightTop = Game.getTrafficLights()[0];
var trafficLightRight = Game.getTrafficLights()[1];
var trafficLightLeft = Game.getTrafficLights()[2];
var trafficLightBottom = Game.getTrafficLights()[3];