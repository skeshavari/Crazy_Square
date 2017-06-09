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
            color: "red"
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
        makeTrafficLight(3, 3);
        makeTrafficLight(3, 4);
        makeTrafficLight(4, 3);
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
            while (this.turnLeft) {
                if (this.direction === "north" && this.locX === 3 && this.locY === 3) {
                    this.direction = "west";
                    this.turnLeft = false;
                } else if (this.direction === "south" && this.locX === 2 && this.locY === 2) {
                    this.direction = "east";
                    this.turnLeft = false;
                } else if (this.direction === "east" && this.locX === 3 && this.locY === 2) {
                    this.direction = "north";
                    this.turnLeft = false;
                } else if (this.direction === "west" && this.locX === 2 && this.locY === 3) {
                    this.direction = "south";
                    this.turnLeft = false;
                }
            }
        }

        function turnRight() {
            while (this.turnRight) {
                if (this.direction === "west" && this.locX === 3 && this.locY === 3) {
                    this.direction = "north";
                    this.turnRight = false;
                } else if (this.direction === "east" && this.locX === 2 && this.locY === 2) {
                    this.direction = "south";
                    this.turnRight = false;
                } else if (this.direction === "north" && this.locX === 3 && this.locY === 2) {
                    this.direction = "east";
                    this.turnRight = false;
                } else if (this.direction === "south" && this.locX === 2 && this.locY === 3) {
                    this.direction = "west";
                    this.turnRight = false;
                }
            }
        }

        //

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