const createName = text => {
	const removeSpace = text.replace(/\s/g, '');
	const makeCCase = removeSpace.toLowerCase();
	return makeCCase;
};

export default createName;
