document.getElementById('btnSubmit').onclick = () => {
	let workDays = document.getElementById('workDays').value;
	let holiDays = document.getElementById('holiDays').value;
	let penalties = document.getElementById('penalties').value;

	const hours = 12;
	const pricePerHour = 200;
	const pricePerHourHoliday = 220;

	let result = (hours * (pricePerHour * workDays + pricePerHourHoliday * holiDays) - penalties);

	document.getElementById('result').value = `${result}.00 руб.`;

}