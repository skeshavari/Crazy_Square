/**
 * Created by ckyoung on 19-May-17.
 */
(function () {
    describe("The game", function () {
        it("should exist", function(){
            expect(Game).toBeDefined();
        })
    });
    describe("The cars", function() {
        it("should have been added", function() {
            Game.makeCar(3, 5, "south");
            Game.makeCar(1, 3, "east");
            Game.makeCar(5, 4, "west");
            expect(Game.getCars().length).toBe(3);
            Game.clearTest();
        });
    });
    describe("The traffic lights", function() {
        it("should have been added", function() {
            Game.makeTrafficLight(4, 2);
            Game.makeTrafficLight(5, 4);
            Game.makeTrafficLight(3, 5);
            Game.makeTrafficLight(2, 3);
            expect(Game.getTrafficLights().length).toBe(4);
            Game.clearTest();
        });
    });
    describe("A traffic light", function() {
        it("can change color to green", function() {
            Game.makeTrafficLight(4, 2);
            Game.getTrafficLights()[0].changeColor();
            expect(Game.getTrafficLights()[0].getColor()).toBe("green");
            Game.clearTest();
        });
        it("can change color to red, if it isn't already", function() {
            Game.makeTrafficLight(4, 2);
            Game.getTrafficLights()[0].color = "green";
            Game.getTrafficLights()[0].changeColor();
            expect(Game.getTrafficLights()[0].getColor()).toBe("red");
            Game.clearTest();
        });
    });

})();
