module.exports = {
	formatId: function(id) {
		if (id <= 9) {
			return "#00" + id;
		} else if (id <= 99) {
			return "#0" + id;
		} else {
			return "#" + id;
		}
	},
	upperFirstCase: function(text) {
		return text[0].toUpperCase() + text.slice(1);
	}
};
