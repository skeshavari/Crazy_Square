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
                state.color = _color.toUpperCase();
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

    var Car = function (x = 3, y = 3, facing = "north", newRoute = "forward") {
        var state = {
            locX: x,
            locY: y,
            direction: facing,
            route: newRoute,
            hasTurned: false,
        }

        function redLight() {
            if (state.locX === 2 && state.locY === 1 &&
                trafficLightTop.getColor() === "RED") {
                return true;
            }
            if (state.locX === 1 && state.locY === 3 &&
                trafficLightLeft.getColor() === "RED") {
                return true;
            }
            if (state.locX === 3 && state.locY === 4 &&
                trafficLightBottom.getColor() === "RED") {
                return true;
            }
            if (state.locX === 4 && state.locY === 2 &&
                trafficLightRight.getColor() === "RED") {
                return true;
            }
        }

        function checkFront(locX, locY) {
            if (atValidLocation()) {
                return false
            }
            for (i = 0; i < cars.length; i++) {
                if (cars[i].getX() === locX && cars[i].getY() === locY) {
                    return true
                }
            }
            return false
        }

        function carInFront() {
            var inFront;
            switch (state.direction) {
                case "north":
                    return checkFront(state.locX, state.locY - 1)
                case "south":
                    return checkFront(state.locX, state.locY + 1)
                case "east":
                    return checkFront(state.locX + 1, state.locY)
                case "west":
                    return checkFront(state.locX - 1, state.locY)
            }
        }

        function forward(distance = 1) {
            if (redLight() || carInFront()) {
                return;
            }
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

        //Todo: refactor turnleft.
        function turnLeft() {
            switch (state.direction) {
                case "north":
                    if (state.locX === 3 && state.locY === 2) {
                        state.direction = "west";
                        state.hasTurned = true;
                    }
                    break;
                case "south":
                    if (state.locX === 2 && state.locY === 3) {
                        state.direction = "east";
                        state.hasTurned = true;
                    }
                    break;
                case "east":
                    if (state.locX === 3 && state.locY === 3) {
                        state.direction = "north";
                        state.hasTurned = true;
                    }
                    break;
                case "west":
                    if (state.locX === 2 && state.locY === 2) {
                        state.direction = "south";
                        state.hasTurned = true;
                    }
                    break;
            }
            forward();
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
                    break;
            }
            state.hasTurned = true
            forward();
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
        makeCar: function (x, y, facing, route) {
            cars.push(Car(x, y, facing, route));
        },
        makeTrafficLight: function (x, y) {
            lights.push(TrafficLight(x, y))
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

Game.makeTrafficLight(1, 1);
Game.makeTrafficLight(1, 4);
Game.makeTrafficLight(4, 1);
Game.makeTrafficLight(4, 4);
Game.makeCar(3, 5, "north", "left");
Game.makeCar(2, 0, "south", "left");
Game.makeCar(2, -1, "south", "left");
Game.makeCar(2, -2, "south", "left");

var trafficLightTop = Game.getTrafficLights()[0];
var trafficLightRight = Game.getTrafficLights()[2];
var trafficLightLeft = Game.getTrafficLights()[1];
var trafficLightBottom = Game.getTrafficLights()[3];