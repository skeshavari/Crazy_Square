function Auto(game) {
	carGraphics = game.add.graphics(0, 0);
	carGraphics.beginFill(0xF1234F, 1.0);
	carGraphics.drawRect(435, 10, 30, 80);
	carGraphics.endFill();

	this.sprite = game.add.sprite(350, 50, carGraphics.generateTexture());
	this.sprite.anchor.setTo(0.5, 0.5);

	carGraphics.destroy();

	this.currentX = this.sprite.x;
	this.goX = this.currentX;

	this.updateX = function updateX() {
		this.sprite.x = this.goX;
	}

	return this;
}
