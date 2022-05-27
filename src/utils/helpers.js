const truncateText = (str, length) => {
	if (length == null) {
		length = 100;
	}

	const ending = '...';

	if (str.length > length) {
		return str.substring(0, length - ending.length) + ending;
	} else {
		return str;
	}
};

const toTitleCase = (toTransform) => {
    toTransform = toTransform.toLowerCase();
    return toTransform.replace(/\b([a-z])/g, function (_, initial) {
        return initial.toUpperCase();
    });
  }

export { truncateText, toTitleCase };