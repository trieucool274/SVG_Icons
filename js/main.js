(() => {

	console. log('JS is linked! Hooray!');

	let theButton = document. querySelector(".icon-button");
		theIcons = document.querySelectorAll(".icon");

	function logClick() {
		console.log('clicked the button (or icon)!');
	}

	theButton. addEventListener('click', logClick);
	theIcon. forEach(icon => icon.addEventListener('click', logClick));
	
})();
