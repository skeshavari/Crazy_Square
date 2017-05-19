function lerp(a, b, amount) {
	if (Math.abs(a - b) < 0.01) {
		return a;
	}

	return a + (b - a)*amount;
}