var Car = function(game, locX, locY) {

	var sprite = game.add.sprite(0, 0, 'car');

	sprite.scale.x = 0.5;
	sprite.scale.y = 0.5;
    sprite.anchor.x = 0.5;
    sprite.anchor.y = 0.5;


    locX = locX + (sprite.width / 2);
    locY = locY + (sprite.width / 2);

    sprite.x = locX;
    sprite.y = locY;

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