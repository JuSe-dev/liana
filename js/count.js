const values = document.querySelectorAll('.stat-num');
const interval = 2000;
let times = 1;

document.addEventListener('scroll', () => {
	if (times > 0) {
		values.forEach(value => {
			let startValue = 0;
			let endValue = parseInt(value.getAttribute('data'));
			let duration = Math.floor(interval / endValue);
			
			let count = setInterval(() => {
				if (endValue <= 1000) {
					startValue += 1
				}
				else if (endValue <= 5000) {
					startValue += 10
				}
				else if (endValue >= 10000) {
					startValue += 20
				}
				value.textContent = startValue;
				if (startValue === endValue) {
					clearInterval(count);
				}
			}, duration);
		})
		times -= 1;
	}

})
