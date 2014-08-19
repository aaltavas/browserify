module.exports = function (r) {
	return {
		volume: function() {
			return (4/3) * Math.PI * Math.pow(r, 3);
		}

	}
}