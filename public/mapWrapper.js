var MapWrapper = function(container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, { 
    center: coords,
    zoom: zoom 
  });
  this.markers = [];
}

MapWrapper.prototype = {
  addMarker: function(coords) {
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
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
}
