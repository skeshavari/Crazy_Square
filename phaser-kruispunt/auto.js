function Auto(game) { 
	carGraphics = game.add.graphics(0, 0);
	carGraphics.beginFill(0xF1234F, 1.0);
	carGraphics.drawRect(435, 10, 30, 80);
	carGraphics.endFill();

	this.carSprite = game.add.sprite(350, 50, carGraphics.generateTexture());
	this.carSprite.anchor.setTo(0.5, 0.5);

	carGraphics.destroy();

	return this.carSprite;

}