module.exports = function (sides) {
	return {
		diagonals: function() {
			return 0.5 * sides * (sides - 3);
		}
	};
}