const like = (count: number) => {
	if (count > 10000) {
		return `${count / 1000}k`;
	}
	if (count > 500) {
		return `${count / 100 / 10}k`;
	}
	if (count === 0) {
		return '0';
	}
	return count;
};

export default {
	like: (count: number) => like(count),
};
