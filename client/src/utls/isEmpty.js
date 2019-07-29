const isEmpty = value =>
	value === undefined ||
	value === null ||
	value[0] === null ||
	(typeof value === 'object' && Object.keys(value).length === 0) ||
	(typeof value === 'string' && value.trim().length === 0) ||
	(typeof value[0] === 'object' && Object.keys(value[0]).length === 0) ||
	(typeof value[0] === 'string' && value[0].trim().length === 0) ||
	Object.keys(value).length === 0;

export default isEmpty;
