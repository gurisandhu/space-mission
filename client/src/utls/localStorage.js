export const setToStore = (name, item) => {
	localStorage.setItem(name, JSON.stringify(item));
};

export const getFromStore = name => {
	const gettingIt = localStorage.getItem(name);
	return JSON.parse(gettingIt);
};
