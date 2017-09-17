$(function () {
	var digit_to_name = 'zero one two three four five six seven eight nine'.split(' ');
	var digits = {};
	var positions = [
		'h1', 'h2', ':', 'm1', 'm2', ':', 's1', 's2'
	];

	var digit_holder = $('.digits');

	$.each(positions, function () {

		if (this == ':') {
			digit_holder.append('<div class="dots">');
		}
		else {

			var pos = $('<div>');

			for (var i = 1; i < 8; i++) {
				pos.append('<span class="d' + i + '">');
			}
			digits[this] = pos;
			digit_holder.append(pos);
		}

	});

	(function update_time() {
		var now = moment().format("hhmmssdA");
		digits.h1.attr('class', digit_to_name[now[0]]);
		digits.h2.attr('class', digit_to_name[now[1]]);
		digits.m1.attr('class', digit_to_name[now[2]]);
		digits.m2.attr('class', digit_to_name[now[3]]);
		digits.s1.attr('class', digit_to_name[now[4]]);
		digits.s2.attr('class', digit_to_name[now[5]]);
		var dow = now[6];
		dow--;
		if (dow < 0) {
			dow = 6;
		}

		setTimeout(update_time, 1000);

	})();

});