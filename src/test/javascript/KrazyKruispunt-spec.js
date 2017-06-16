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
        beforeEach(function () {
            trafficLightBottom.setColor("GREEN");
            trafficLightTop.setColor("GREEN");
            trafficLightLeft.setColor("GREEN");
            trafficLightRight.setColor("GREEN");
        });

        it("should have been added", function () {
            Game.clearTest();
            Game.makeCar(3, 3, "south");
            Game.makeCar(1, 3, "east");
            Game.makeCar(5, 4, "west");
            Game.makeCar();
            expect(Game.getCars().length).toBe(4);
        });
        it("should be at the right position", function () {
            var cars = Game.getCars();
            expect(cars[0].getX()).toBe(3);
            expect(cars[0].getY()).toBe(3);
            expect(cars[0].getDirection()).toBe("south");
            expect(cars[1].getX()).toBe(1);
            expect(cars[1].getY()).toBe(3);
            expect(cars[1].getDirection()).toBe("east");
            expect(cars[2].getX()).toBe(5);
            expect(cars[2].getY()).toBe(4);
            expect(cars[2].getDirection()).toBe("west");
            expect(cars[3].getX()).toBe(3);
            expect(cars[3].getY()).toBe(3);
            expect(cars[3].getDirection()).toBe("north");
        })
        it("should update if update() is called", function () {
            Game.update();
            var cars = Game.getCars();
            expect(cars[0].getX()).toBe(3);
            expect(cars[0].getY()).toBe(4);
            expect(cars[0].getDirection()).toBe("south");
            expect(cars[1].getX()).toBe(2);
            expect(cars[1].getY()).toBe(3);
            expect(cars[1].getDirection()).toBe("east");
            expect(cars[2].getX()).toBe(4);
            expect(cars[2].getY()).toBe(4);
            expect(cars[2].getDirection()).toBe("west");
            expect(cars[3].getX()).toBe(3);
            expect(cars[3].getY()).toBe(2);
            expect(cars[3].getDirection()).toBe("north");
        })
    });
    describe("The turning of cars", function () {
        beforeEach(function () {
            trafficLightBottom.setColor("GREEN");
            trafficLightTop.setColor("GREEN");
            trafficLightLeft.setColor("GREEN");
            trafficLightRight.setColor("GREEN");
        });

        it("should make cars that can turn left", function () {
            Game.clearTest();
            Game.makeCar(2, 0, "south", "left");

            Game.update();
            Game.update();
            var cars = Game.getCars();
            expect(cars[0].getX()).toBe(2);
            expect(cars[0].getY()).toBe(2);
            expect(cars[0].getDirection()).toBe("south");
            expect(cars[0].getRoute()).toBe("left");
            expect(cars[0].getHasTurned()).toBe(false);

            Game.update();
            Game.update();

            cars = Game.getCars();
            expect(cars[0].getX()).toBe(2);
            expect(cars[0].getY()).toBe(3);
            expect(cars[0].getDirection()).toBe("east");
            expect(cars[0].getHasTurned()).toBe(true);

        })
    });
    describe("The traffic lights", function () {
        it("should have been added", function () {
            expect(Game.getTrafficLights().length).toBe(4);
            Game.clearTest();
        });
    });
    describe("A traffic light", function () {
        it("can change color to green", function () {
            Game.getTrafficLights()[0].setColor("GREEN");
            expect(Game.getTrafficLights()[0].getColor()).toBe("GREEN");
            Game.clearTest();
        });
    });
    describe("A red light and a car", function () {
        it("will stop if in front of a red light", function () {
            Game.clearTest();
            Game.makeCar(2, 0, "south")
            trafficLightTop.setColor("RED");
            Game.update();
            Game.update();
            Game.update();
            Game.update();
            Game.update();
            Game.update();
            Game.update();
            var cars = Game.getCars();
            expect(cars[0].getX()).toBe(2);
            expect(cars[0].getY()).toBe(1);
            expect(cars[0].getDirection()).toBe("south");
            Game.clearTest();
        });
    });
    describe("A red light and a car", function () {
        it("will stop if in front of a red light", function () {
            Game.clearTest();
            trafficLightTop.setColor("RED");
            Game.makeCar(2, 0, "south");
            Game.makeCar(2, 1, "south");
            Game.update();
            Game.update();
            Game.update();
            Game.update();
            Game.update();
            Game.update();
            Game.update();
            var cars = Game.getCars();
            expect(cars[0].getX()).toBe(2);
            expect(cars[0].getY()).toBe(0);
            expect(cars[0].getDirection()).toBe("south");
            expect(cars[1].getX()).toBe(2);
            expect(cars[1].getY()).toBe(1);
            expect(cars[1].getDirection()).toBe("south");
            Game.clearTest();
        });
    });

})();