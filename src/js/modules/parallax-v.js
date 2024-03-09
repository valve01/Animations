
// Создаем в :root переменную --scrollTop, в которой будет динамически изменяемое значение положение скролла по Y.

// document.documentElement - соответсвует html
// document.documentElement.style соответсвует директиве :root
// У объекта window - метод scrollY (то же что и pageYOffset) содержит текущую прокрутку страницы по Y.
window.addEventListener('scroll', setY);
function setY() {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`);
}


