var Crossroad = function(game) {
	var graphics = game.add.graphics(0, 0);

	graphics.lineStyle(5, 0x000000, 1);
	graphics.beginFill(0xFFFFFF, 0.9);

	// Top four
    graphics.drawRect(300, 0, 100, 100);
    graphics.drawRect(200, 0, 100, 100);
    graphics.drawRect(300, 100, 100, 100);
    graphics.drawRect(200, 100, 100, 100);

    // Middle four
    graphics.drawRect(300, 200, 100, 100);
    graphics.drawRect(200, 200, 100, 100);
    graphics.drawRect(300, 300, 100, 100);
    graphics.drawRect(200, 300, 100, 100);

    // Left six
    graphics.drawRect(0, 200, 100, 100);
    graphics.drawRect(100, 200, 100, 100);
    graphics.drawRect(0, 300, 100, 100);
    graphics.drawRect(100, 300, 100, 100);

    // Right four
    graphics.drawRect(400, 200, 100, 100);
    graphics.drawRect(500, 200, 100, 100);
    graphics.drawRect(400, 300, 100, 100);
    graphics.drawRect(500, 300, 100, 100);

    // Bottom four
    graphics.drawRect(300, 400, 100, 100);
    graphics.drawRect(200, 400, 100, 100);
    graphics.drawRect(300, 500, 100, 100);
    graphics.drawRect(200, 500, 100, 100);

    graphics.endFill();
}