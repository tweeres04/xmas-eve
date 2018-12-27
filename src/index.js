import differenceInDays from 'date-fns/difference_in_days';
import startOfDay from 'date-fns/start_of_day';

const todayDiv = document.getElementById('today');

const today = startOfDay(new Date());
let xmas = new Date(today.getFullYear(), 11, 25);

if (today > xmas) {
	xmas = new Date(today.getFullYear() + 1, 11, 25);
}

const difference = differenceInDays(xmas, today);

todayDiv.textContent = `🎄 Christmas ${buildEves([], difference)}`;

function buildEves(currentEves, numberOfEves) {
	return numberOfEves > 0
		? buildEves([...currentEves, 'Eve'], numberOfEves - 1)
		: [...currentEves, '🎄'].join(' ');
}
