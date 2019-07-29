import 'core-js';

const uniqueObject = value =>
	Array.from(new Set(value.map(a => a.id))).map(id => {
		return value.find(a => a.id === id);
	});

export default uniqueObject;
