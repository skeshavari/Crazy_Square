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
            getX: function(){
                return state.locX;
            },
            getY: function(){
                return state.locY;
            }
        }
    };

    var makeTrafficLight = function(x, y) {
        lights.push(TrafficLight(x, y))
    };

    (function () {
        makeTrafficLight(3, 3);
        makeTrafficLight(3, 4);
        makeTrafficLight(4, 3);
        makeTrafficLight(4, 4);
    })();

    return {
        clearTest: function () {
            cars = [];
        },
        makeCar: function (x, y, facing) {
            cars.push({
                locX: x,
                locY: y,
                direction: facing,
                moveForward: function (distance) {
                    switch (facing) {
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
                },
                turnLeft: function () {
                    switch (facing) {
                        case "north":
                            this.direction = "west";
                            break;
                        case "south":
                            this.direction = "east";
                            break;
                        case "east":
                            this.direction = "south";
                            break;
                        case "west":
                            this.direction = "north";
                    }
                },
                turnRight: function () {
                    switch (facing) {
                        case "north":
                            this.direction = "east";
                            break;
                        case "south":
                            this.direction = "west";
                            break;
                        case "east":
                            this.direction = "north";
                            break;
                        case "west":
                            this.direction = "south";
                    }
                }
            });
        },
        getCars: function () {
            return cars;
        },

        getTrafficLights: function () {
            return lights;
        }
    };
})();