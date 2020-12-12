
function photoСhange() {
	const myPhoto = document.getElementsByClassName('about-me__my-photo')[0];
	// myPhoto.addEventListener('click', onClickMyPhoto);

	let i = 0;

	const arrSrc = [
		'images/my-comp.jpg',
		'images/моя фотография.jpg'
	]

	function onClickMyPhoto () {
		myPhoto.src = arrSrc[i];
		i++;
		if(i > 1) {
			i = 0;
		}
	} 

	// меняем каждые 1 сек
	setInterval(function() {
		onClickMyPhoto();
	}, 10000)
}

photoСhange();


