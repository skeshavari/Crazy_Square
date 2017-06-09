/**
 * Created by ckyoung on 19-May-17.
 */
Game = (function () {
    var cars = [];
    var lights = [];

    (function () {
        makeTrafficLight(4, 2);
        makeTrafficLight(5, 4);
        makeTrafficLight(3, 5);
        makeTrafficLight(2, 3);
    })();
    
    function makeTrafficLight(x, y) {
            lights.push({
                locX: x,
                locY: y,
                color: "red",
                setColor: function (_color) {
                    this.color = _color;
                },
                getColor: function () {
                    return this.color;
                }
            });
        }

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