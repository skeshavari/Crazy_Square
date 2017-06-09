var Car = function(game, locX, locY) {

	sprite = game.add.sprite(0, 0, 'car');

    locX = locX + (sprite.width / 2);
    locY = locY + (sprite.width / 2);

	this.currentX = this.sprite.x;
	this.goX = this.currentX;
	this.currentY = this.sprite.y;
	this.goY = this.currentY;

	return this;
};

Car.prototype.update = function() {
	this.sprite.x = Phaser.Math.linearInterpolation([this.currentX, this.goX], 0.25);
	this.currentX = this.sprite.x;

	this.sprite.y = Phaser.Math.linearInterpolation([this.currentY, this.goY], 0.25);
	this.currentY = this.sprite.y;
}