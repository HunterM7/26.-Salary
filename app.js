document.getElementById('btnSubmit').onclick = () => {
	let workDays = document.getElementById('workDays').value;
	let holiDays = document.getElementById('holiDays').value;
	let penalties = document.getElementById('penalties').value;

	const hours = 10;
	const pricePerHour = 200;
	const pricePerHourHoliday = 220;

	document.getElementById('result').value = hours * (pricePerHour * workDays + pricePerHourHoliday * holiDays) - penalties;
}