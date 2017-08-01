var initialize = function() {
  var mapDiv = document.querySelector('#main-map');
  var center = {content: "this is the centre of London", coords: {lat: 51.5073509, lng: -0.1277583}};
  var croydon = {content: "mark's dad's pad", coords: {lat: 51.376165, lng: -0.098234}};
  var melb = {content: "sunshine, flat whites, koalas", coords: {lat: -37.8106733, lng: 144.9629183,}};
  var mainMap = new MapWrapper(mapDiv, center.coords, 10);

  mainMap.addMarker(center);
  mainMap.addMarker(croydon);
  // mainMap.addMarker(melb);
  mainMap.addClickEvent();

  var bounceButton = document.querySelector('#button-bounce-markers');
  bounceButton.addEventListener('click', mainMap.bounceMarkers.bind(mainMap));

  var takeToMelbButton = document.querySelector('#take-to-melb');
  takeToMelbButton.addEventListener('click', mainMap.takeToMelb.bind(mainMap));
};

window.addEventListener('load', initialize);