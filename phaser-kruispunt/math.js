function lerp(a, b, amount) {
	if (Math.abs(a - b) < 0.1) {
		return b;
	} 

	return a + (b - a)*amount;
}


function lerp_angle(a, b, amount) {
	if (Math.abs(a - b) < 0.1) {
		return b;
	} else if (b < a) {
		return a + (b - a)*amount;
	} else {
		return a + (b - a)*amount;
	}
	
}

