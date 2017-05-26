/**
 * Created by ckyoung on 19-May-17.
 */
Game = (function() {
    var cars = [];
    var lights = [];

    return {
        clearTest: function() {
            lights = [];
            cars = [];
        },
        makeCar: function(x,y,facing) {
            cars.push({
                locX: x,
                locY: y,
                direction: facing,
                moveForward: function() {
                    switch (facing) {
                        case "north":
                            this.locX += 1;
                            break;
                        case "south":
                            this.locX -= 1;
                            break;
                        case "east":
                            this.locY += 1;
                            break;
                        case "west":
                            this.locY -= 1;
                            break;
                    }
                }
            });
        },
        getCars: function() {
            return cars;
        },
        makeTrafficLight: function(x,y) {
            lights.push({
                locX: x,
                locY: y,
                color: "red",
                changeColor: function() {
                    if (this.color === "red") {
                        this.color = "green";
                    } else if (this.color === "green") {
                        this.color = "red";
                    }
                },
                getColor: function() {
                    return this.color;
                }
            });
        },
        getTrafficLights: function() {
            return lights;
        }
    };
})();