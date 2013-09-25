$(function(){
  var map = L.map('map').setView([42.4370, -82.9864], 14);
  baseLayer = L.tileLayer('http://a.tiles.mapbox.com/v3/matth.map-n9bps30s/{z}/{x}/{y}.png');
  map.addLayer(baseLayer);

  vacancyLayer = L.tileLayer('http://a.tiles.mapbox.com/v3/matth.Osborn/{z}/{x}/{y}.png');
  map.addLayer(vacancyLayer);

  var utfGrid = new L.UtfGrid('http://{s}.tiles.mapbox.com/v3/matth.Osborn/{z}/{x}/{y}.grid.json?callback={cb}');
  utfGrid.on('mouseover', function (e) {
      console.log('hover: ', e.data.geo_info);
      var geo_info = e.data.geo_info;
      var split = geo_info.split('"');
      var address = split[3];
      console.log(address);
      $('h1').html(address);
  });
  utfGrid.on('mouseout', function() {
    $('h1').html('Osborn Area');
  })
  map.addLayer(utfGrid);


});
