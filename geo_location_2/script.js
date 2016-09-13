$(document).ready(function() {
    var lat, lon, api_url;
	
	if ("geolocation" in navigator) {
	// jQuery code to go here
	
	
		$('#showTemp').on('click', function() {
			// 'Get' the button with jQuery and execute an anonymous functyion when it's clicked
			
		
			navigator.geolocation.getCurrentPosition(getLocation);
			//Let's get the corrodinatates of the user!
			
	
			function getLocation(position) {
				lat = position.coords.latitude; // get latitude
				lon = position.coords.longitude; // get longitude
				console.log(position);
				
				api_url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=f0b878f87223057c5809f05fd31734a0';	
				
				$.ajax({
					url : api_url,
					method : 'GET',
					success : function (data) {
						
						$('#location').html(data.name + ', ' + data.sys.country);
						
						var weather = data.weather[0].main;
						$('#weather').html(weather);
						
						var iconCode = data.weather[0].icon;
						
						var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
						$('#icon').html("<img class='newIcon' src=" + iconUrl + ">");
						
						var tempr = data.main.temp;
						$('#temp').html(tempr + 'º F');
						
						var humid = data.main.humidity;
						$('#humidity').html(humid + '%');
					}
				});
			}
			
			// navigator.geolocation.getCurrentPosition(initialize); 
			initialize(position);

			function initialize(position) {
				var map = new google.maps.Map(document.getElementById('temp_map'), {
					center: {lat: position.coords.latitude, lng: position.coords.longitude},
					zoom: 8
				});
			}
			
		});
	} else {
		alert("Your browser does not support geolocation. Sorry.");	
	}
});
