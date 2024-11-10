let dataValues;
let bubbles;
let notifications;

document.cookie = "username=YOUR MOTHER;"

window.onload = function() {
	dataValues = document.querySelectorAll("#dataValues");
	bubbles = document.querySelectorAll("#bubbles");
	notifications = document.querySelectorAll(".notif")

	bubbles.forEach((bubble, index) => {
		let targetValue = bubble.dataset.value;

		anime({
			targets: bubble,
			height: targetValue + 'px',
			duration: 2000,
			delay: (index + 1) * 100 - 100
		})
	})

	dataValues.forEach((dataValue) => {
		let targetValue = dataValue.dataset.value;

		anime({
			targets: dataValue,
			innerText: targetValue,
			easing: 'spring(1, 80, 10, 0',
			round: 1,
			duration: 1000
		})
	})

	anime({
		targets: notifications,
		opacity: 1,
		left: 0,
		delay: anime.stagger(100),
		easing: 'easeOutExpo',
		duration: 600
	})
}
