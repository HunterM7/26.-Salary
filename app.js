document.getElementById('btnSubmit').onclick = () => {
	let workHours = document.getElementById('workHours').value;
	let holiHours = document.getElementById('holiHours').value;
	let penalties = document.getElementById('penalties').value;

	const pricePerHour = 240;
	const pricePerHourHoliday = 264;

	let result = convertNum((pricePerHour * workHours + pricePerHourHoliday * holiHours) - penalties);

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
