Game = (function () {
    var cars = [];
    var lights = [];
    var randomSpawn = false;
    var spawnChance = 0.75;
    var maximumSpawns = 25;
    var alreadySpawned = 0;
    var collisionCounter = 0;
    var maximumCrashes = 10;
    var totalCarsSafelyPassed = 0;
    var totalScore = 0;

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
            },
            toggle: function(){
                if(state.color==="RED"){
                    state.color = "GREEN";
                } else {
                    state.color = "RED";
                }
            }
        }
    };

    var Car = function (x = 3, y = 6, facing = "north", newRoute = "forward") {
        var state = {
            locX: x,
            locY: y,
            direction: facing,
            route: newRoute,
            hasTurned: false,
            explodeOnNextTurn: false,
            carPassedSquare: false
        }

        function redLight() {
            if (state.locX === 2 &&
                state.locY === 1 &&
                trafficLightTop.getColor() === "RED") {
                return true;
            }
            if (state.locX === 1 &&
                state.locY === 3 &&
                trafficLightLeft.getColor() === "RED") {
                return true;
            }
            if (state.locX === 3 &&
                state.locY === 4 &&
                trafficLightBottom.getColor() === "RED") {
                return true;
            }
            if (state.locX === 4 &&
                state.locY === 2 &&
                trafficLightRight.getColor() === "RED") {
                return true;
            }
        }

        function checkFront(locX, locY) {
            if (atValidLocation() || inFrontOfGreenLight()) {
                return false;
            }
            for (i = 0; i < cars.length; i++) {
                if (cars[i].getX() === locX && cars[i].getY() === locY) {
                    return true;
                }
            }
            return false;
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
                return true;
            }
            return false;
        }

        function checkIfYLocIsCenter() {
            if (state.locY === 2 || state.locY === 3) {
                return true;
            }
            return false;
        }

        function atValidLocation() {
            if (checkIfXLocIsCenter() && checkIfYLocIsCenter()) {
                state.carPassedSquare = true;
                return true;
            }
            return false;
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

        function inFrontOfGreenLight() {
            if (state.locX > 0 && state.locX < 5 && state.locY > 0 && state.locY < 5) {
                return true;
            }
            return false;
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
            },
            isOutOfBounds: function () {
                if (state.locX < -2 || state.locX > 7) {
                    return true;
                }
                if (state.locY < -2 || state.locY > 7) {
                    return true;
                }
                return false;
            },
            setExplodeOnNextTurn: function () {
                state.explodeOnNextTurn = true;
            },
            getExplodeOnNextTurn: function () {
                return state.explodeOnNextTurn;
            }, 
            getHasPassedSquare: function () {
                return state.carPassedSquare;
            }
        }
    }

    function carPresentAt(x, y) {
        for (var i = 0; i < cars.length; i++) {
            if (x === cars[i].getX() && y === cars[i].getY()) {
                return true;
            }
        }
        return false;
    }

    function generateRandomCarAndAddToList() {
        var chance = Math.floor(Math.random() * cars.length);
        var validRoutes = ["left", "right", "forward"];
        var routeChance = Math.floor(Math.random() * validRoutes.length);

        switch (chance) {
            case (0):
                if (carPresentAt(-1, 3)) {
                    return;
                }
                cars.push(Car(-1, 3, "east", validRoutes[routeChance]));
                alreadySpawned += 1;
                break;
            case (1):
                if (carPresentAt(2, -1)) {
                    return;
                }
                cars.push(Car(2, -1, "south", validRoutes[routeChance]));
                alreadySpawned += 1;
                break;
            case (2):
                if (carPresentAt(3, 6)) {
                    return;
                }
                cars.push(Car(3, 6, "north", validRoutes[routeChance]));
                alreadySpawned += 1;
                break;
            case (3):
                if (carPresentAt(6, 2)) {
                    return;
                }
                cars.push(Car(6, 2, "west", validRoutes[routeChance]));
                alreadySpawned += 1;
                break;
        };

        if (maximumSpawns === alreadySpawned) {
            randomSpawn = false;
        }
    }

    function spawnLimitNOTReached() {
        return maximumSpawns > alreadySpawned;
    }

    function spawnRandomCars() {
        if (randomSpawn) {
            var chance = Math.random();
            if (chance <= spawnChance && spawnLimitNOTReached()) {
                generateRandomCarAndAddToList();
            }
        }
    }

    function detectCollision(x, y) {
        var count = 0;
        for (var i = 0; i < cars.length; i++) {
            if (cars[i].getX() === x && cars[i].getY() === y) {
                count++;
            }
        }
        if (count > 1) {
            return true;
        }
        return false;
    }

    function carWasRescuedAddToScore() {
        totalCarsSafelyPassed++;
        totalScore += 1500
    }

    function carExplodedDecreaseStore(){
        totalScore -= 15000;
        if (totalScore < 0) {
            totalScore = 0;
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
            lights.push(TrafficLight(x, y));
        },
        getCars: function () {
            return cars;
        },
        getTrafficLights: function () {
            return lights;
        },
        update: function () {
            var index = [];
            var carsLength = cars.length;
            for (var i = 0; i < carsLength; i++) {

                if (cars[i].isOutOfBounds() && cars[i].getHasPassedSquare()) {
                    carWasRescuedAddToScore();

                }

                if (cars[i].getExplodeOnNextTurn()) {
                    carExplodedDecreaseStore();
                }
                if (cars[i].isOutOfBounds() || cars[i].getExplodeOnNextTurn()) {
                    index.push(i);
                    cars.splice(i, 1);
                    carsLength = cars.length;
                    i--;

                    
                } else {
                    cars[i].update();

                    if (detectCollision(cars[i].getX(), cars[i].getY())) {
                        cars[i].setExplodeOnNextTurn();
                        this.incrementCollisionCounter();
                    }
                }
            }

            spawnRandomCars();
             
            return index;
        },
        setRandomSpawn: function (input) {
            if (input === true) {
                randomSpawn = input;
            } else {
                randomSpawn = false;
            }
        },
        changeSpawnChance: function (chance = 0.75) {
            spawnChance = chance;
        },
        getRandomSpawn: function () {
            return randomSpawn;
        },
        setTotalSpawns: function (number = 25) {
            maximumSpawns = number;
        },
        getSpawnRatio: function () {
            return alreadySpawned + " / " + maximumSpawns;
        },
        getCollisionCounter: function () {
            return collisionCounter;
        },
        incrementCollisionCounter: function () {
            collisionCounter++;
        },
        setMaximumCrashesAllowed: function (max_crashes) {
            maximumCrashes = max_crashes;
        },
        getMaximumCrashesAllowed: function () {
            return maximumCrashes;
        },
        getTotalCrashesAllowed() {
            return maximumCrashes - collisionCounter;
        },
        getTotalCarsSafelyPassed() {
            return totalCarsSafelyPassed;
        },
        getTotalScore() {
            return totalScore;
        }
    };
})();