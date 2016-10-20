
// var latitude;
// var longitude;
// var map;

// 		initMap = function() {
// 		  var pyrmont = {lat: latitude, lng: longitude};

// 		  map = new google.maps.Map(document.getElementById('map'), {
// 		    center: pyrmont,
// 		    zoom: 17
// 		  });

// 		  var service = new google.maps.places.PlacesService(map);
// 		  service.nearbySearch({
// 		    location: pyrmont,
// 		    radius: 1000,
// 		    type: ['hotels']
// 		  }, processResults);
// 		}

// 		function processResults(results, status, pagination) {
// 		  if (status !== google.maps.places.PlacesServiceStatus.OK) {
// 		    return;
// 		  } else {
// 		    createMarkers(results);

// 		    if (pagination.hasNextPage) {
// 		      var moreButton = document.getElementById('more');

// 		      moreButton.disabled = false;

// 		      moreButton.addEventListener('click', function() {
// 		        moreButton.disabled = true;
// 		        pagination.nextPage();
// 		      });
// 		    }
// 		  }
// 		}

// 		function createMarkers(places) {
// 		  var bounds = new google.maps.LatLngBounds();
// 		  var placesList = document.getElementById('places');

// 		  for (var i = 0, place; place = places[i]; i++) {
// 		    var image = {
// 		      url: place.icon,
// 		      size: new google.maps.Size(71, 71),
// 		      origin: new google.maps.Point(0, 0),
// 		      anchor: new google.maps.Point(17, 34),
// 		      scaledSize: new google.maps.Size(25, 25)
// 		    };

// 		    var marker = new google.maps.Marker({
// 		      map: map,
// 		      icon: image,
// 		      title: place.name,
// 		      position: place.geometry.location
// 		    });

// 		    placesList.innerHTML += '<li>' + place.name + '</li>';

// 		    bounds.extend(place.geometry.location);
// 		  }
// 		  map.fitBounds(bounds);
// 		}	

$('#search').change(function() {
	var key = $('#search').val().replace(/[ _-]/,'').toLowerCase();
	var destination = $('#search').val();
	$("span#destination").text(destination);
	$("main").fadeIn();
	var city = cities[key];
	if (city) {
		latitude = parseFloat(city.lat);
		longitude = parseFloat(city.lon);
		console.log(latitude + ", " + longitude);

		// initMap();

	}

	$("header#masthead").css({
		padding: '5vh 0'
	});
});

