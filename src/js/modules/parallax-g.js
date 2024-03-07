function parallaxG(event) {
	const corX = event.clientX;

	// console.log(event.clientX) ;
	const layers = this.querySelectorAll('.parallax-g-bg');
	layers.forEach((layer) => {
		const speedAtr = layer.getAttribute('data-speed-parallax');
		// console.log(speedAtr);
		layer.style.transform = `translateX(${corX / 1000*speedAtr}px)`;
	});
}
document.addEventListener('mousemove', parallaxG);
