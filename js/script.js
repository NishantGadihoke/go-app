$('#search').keypress(function() {
	var key = $('#search').val().replace(/[ _-]/,'').toLowerCase();
	var city = cities[key];
	if (city) {
		var latitude = city.lat;
		var longitude = city.lon;
		console.log(latitude + ", " + longitude);
	}
	$("header#masthead").css({
		padding: '10vh 0'
	});
});