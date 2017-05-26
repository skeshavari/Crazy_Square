function updateGamestate(game) { 
	if (upKey.downDuration(1)) {
	    auto.sprite.goY -= 100;
	} else if (downKey.downDuration(1)) {
		auto.sprite.goY += 100;
	} else if (rightKey.downDuration(1)) {
		auto.sprite.goX += 100;
	} else if (leftKey.downDuration(1)) {
		auto.sprite.goX -= 100;
	}
}