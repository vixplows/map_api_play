var initialize = function() {
  var mapDiv = document.querySelector('#main-map');
  var center = {lat: 51.5073509, lng: -0.1277583};
  var croydon = {lat: 51.376165, lng: -0.098234}
  var mainMap = new MapWrapper(mapDiv, center, 10);
  mainMap.addMarker(center);
  mainMap.addMarker(croydon);
  mainMap.addClickEvent();

  var bounceButton = document.querySelector('#button-bounce-markers');
  bounceButton.addEventListener('click', mainMap.bounceMarkers.bind(mainMap));
};

window.addEventListener('load', initialize);