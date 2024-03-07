(function () {
	var rotateY = 45,
		rotateX = -30;
	rotateZ = 0;

	document.onkeydown = function (e) {
		// left
		if (e.keyCode === 100) rotateY -= 4;
		//    up
		else if (e.keyCode === 104) rotateX += 4;
		// right
		else if (e.keyCode === 102) rotateY += 4;
		// down
		else if (e.keyCode === 98) rotateX -= 4;
		else if (e.keyCode === 39) rotateZ += 4;
		else if (e.keyCode === 37) rotateZ -= 4;

		document.querySelector('.cube').style.transform =
			'rotateY(' + rotateY + 'deg)' + 'rotateX(' + rotateX + 'deg)'+'rotateZ(' + rotateZ + 'deg)';
	};
})();
