const notify = document.querySelector('.sub-notify');
const formBtn = document.querySelector('.form-btn');

function showNotify() {
	notify.classList.add('notify-show');
}

function hideNotify() {
	notify.classList.remove('notify-show');
}

formBtn.addEventListener('click', () => {
	showNotify();
	setTimeout(hideNotify, 3000)
})

