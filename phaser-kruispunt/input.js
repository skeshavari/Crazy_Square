function updateGamestate(game) { 
	if (upKey.downDuration(1)) {
	    auto.sprite.y -= 100;
	} else if (downKey.downDuration(1)) {
		auto.sprite.y += 100;
	} else if (rightKey.downDuration(1)) {
		auto.sprite.x += 100;
	} else if (leftKey.downDuration(1)) {
		auto.sprite.x -= 100;
	}
}