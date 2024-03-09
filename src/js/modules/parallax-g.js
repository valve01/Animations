function parallaxG(event) {
	// event.clientX - содержит координату курсора по X
	const corX = event.clientX;
	// console.log(event.clientX) ;
	const layers = this.querySelectorAll('.parallax-g-bg');
	layers.forEach((layer) => {
		const speedAtr = layer.getAttribute('data-speed-parallax');
		// console.log(speedAtr);
		layer.style.transform = `translateX(${corX / 1000*speedAtr}px)`;
	});
}
// mousemove - событие движения мыши.
document.addEventListener('mousemove', parallaxG);
