

function initMap() {
    var directionRenderer = new google.maps.DirectionsRenderer();
    var directionsService = new google.maps.DirectionsService()
    // The location of Uluru
    const uluru = { lat: -30.344, lng: 131.031 };
    // The map, centered at Uluru
    var map = new google.maps.Map(document.getElementById("googleMap"), {
        zoom: 7,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });

    var input1 = document.getElementById('from');
    var autocomplete1 = new google.maps.places.Autocomplete(input1);
    var input2 = document.getElementById('to');
    var autocomplete2 = new google.maps.places.Autocomplete(input2);

    autocomplete1.addListener('place_changed', function () {
        var place = autocomplete.getPlace();
        document.getElementById("address").value = JSON.stringify(place.address_components);
    });

    autocomplete2.addListener('place_changed', function () {
        var place = autocomplete.getPlace();
        document.getElementById("address").value = JSON.stringify(place.address_components);
    });

    document.getElementById("locate").addEventListener("change",() => {
        calcRoute();
    });

    function calcRoute() {
        var start = document.getElementById('from').value;
        var end = document.getElementById('to').value;
        var request = {
          origin: start,
          destination: end,
          travelMode: 'DRIVING'
        };
        directionsService.route(request, function(result, status) {
          if (status == 'OK') {
            directionRenderer.setDirections(result);
            console.log(result)
          }
        });
      }


}


initMap();


