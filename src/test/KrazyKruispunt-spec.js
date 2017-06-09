/**
 * Created by ckyoung on 19-May-17.
 */

(function () {
    describe("The game", function () {
        it("should exist", function () {
            expect(Game).toBeDefined();
        })
    });
    describe("The cars", function () {
        it("should have been added", function () {
            Game.makeCar(3, 5, "south");
            Game.makeCar(1, 3, "east");
            Game.makeCar(5, 4, "west");
            expect(Game.getCars().length).toBe(3);
        });
        it("should be able to follow a route", function () {
            var cars = Game.getCars();
            cars[0].moveForward(2);
            cars[0].turnLeft();
            cars[0].turnRight();
            cars[0].turnRight();
            expect(cars[0].locX).toBe(3);
            expect(cars[0].locY).toBe(3);
            expect(cars[0].direction).toBe("west");
        })
        Game.clearTest();
    });
    describe("The traffic lights", function () {
        it("should have been added", function () {
            //    Game.makeTrafficLight(4, 2);
            // Game.makeTrafficLight(5, 4);
            //  Game.makeTrafficLight(3, 5);
            //    Game.makeTrafficLight(2, 3);
            expect(Game.getTrafficLights().length).toBe(4);
            Game.clearTest();
        });
    });
    describe("A traffic light", function () {
        it("can change color to green", function () {
            //         Game.makeTrafficLight(4, 2);
            Game.getTrafficLights()[0].setColor("green");
            expect(Game.getTrafficLights()[0].getColor()).toBe("green");
            Game.clearTest();
        });
    });

})();