/**
 * Created by ckyoung on 19-May-17.
 */
Game = (function () {
    var cars = [];
    var lights = [];

    return {
        clearTest: function () {
            lights = [];
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
        makeTrafficLight: function (x, y) {
            lights.push({
                locX: x,
                locY: y,
                color: "red",
                changeColor: function () {
                    if (this.color === "red") {
                        this.color = "green";
                    } else if (this.color === "green") {
                        this.color = "red";
                    }
                },
                getColor: function () {
                    return this.color;
                }
            });
        },
        getTrafficLights: function () {
            return lights;
        }
    };
})();