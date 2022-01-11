document.getElementById('btnSubmit').onclick = () => {
	let workDays = document.getElementById('workDays').value;
	let holiDays = document.getElementById('holiDays').value;
	let penalties = document.getElementById('penalties').value;

	const hours = 12;
	const pricePerHour = 200;
	const pricePerHourHoliday = 220;

	let result = convertNum((hours * (pricePerHour * workDays + pricePerHourHoliday * holiDays) - penalties));

	document.getElementById('result').value = `${result}.00 руб.`;

}

const convertNum = function (x) {
	let str = x.toString()
	let length = Math.ceil(str.toString().length / 3);
	let res = [];


	for (let i = 0; i < length; i++) {
		res.push(str.slice(-3));
		str = str.slice(0, -3);
	}

	return res.reverse().join(' ')
}