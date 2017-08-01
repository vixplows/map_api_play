var MapWrapper = function(container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, { 
    center: coords,
    zoom: zoom 
  });
  this.markers = [];
}

MapWrapper.prototype = {
  addMarker: function(details) {
    var marker = new google.maps.Marker({
      position: details.coords,
      map: this.googleMap
    });
    var infowindow = new google.maps.InfoWindow({
      content: details.content
    });
    marker.addListener('click', function() {
      infowindow.open(this.googleMap, marker)
    });
    this.markers.push(marker);
  },

  addClickEvent: function() {
    google.maps.event.addListener(this.googleMap, 'click', 
      function(event) {
        var position = {
          lat: event.latLng.lat(),
          lng: event.latLng.lng()
        };
        this.addMarker(position);
    }.bind(this));
  },

  bounceMarkers: function() {
    this.markers.forEach(function(marker){
      marker.setAnimation(google.maps.Animation.BOUNCE);
    })
  },

  takeToMelb: function() {
    map.setCenter
    55.9630725
    -3.1710094
  }

}
