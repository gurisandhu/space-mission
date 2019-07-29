export function getDate(params) {
	const d = new Date(params);
	const date = d.toLocaleDateString('en-UTC', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
	return date;
}

export function getTime(params) {
	const d = new Date(params);
	const hours = d.getHours() >= 13 ? d.getHours() - 12 : d.getHours();
	let AmPm = '';
	if (d.getHours() >= 12) {
		AmPm = ' pm';
	} else {
		AmPm = ' am';
	}
	let minutes = '';
	if (d.getMinutes() < 10) {
		minutes = `0${d.getMinutes()}`;
	} else {
		minutes = d.getMinutes();
	}
	const time = `${hours}.${minutes + AmPm}`;
	return time;
}

export function getYear(params) {
	const d = new Date(params);
	const year = d.getFullYear();
	return year;
}
