const cityArray = [["Split, Croatia", 16.44, 43.50],
                   ["Granada, Spain", -3.600, 37.17],
                   ["Budapest, Hungary", 19.04, 47.49],
                   ["Rome, Italy", 12.49, 41.90],
                   ["Dublin, Ireland", -6.266, 53.35]];

/*
 * This function continually checks if the DOM is ready
 * before calling a function to ask the user for their name.
 *
 * Author: Josh Hanson
 * Modifier: Piper Lincoln
 */
function domReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

/*
 * This function adds markers and popups to the map.
 *
 * Author: Piper Lincoln
 */
domReady(function() {
  var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([10.04, 47.49]),
      zoom: 4
    })
  });

   var style = (
    new ol.style.Style({
      image: new ol.style.Icon({
        src: 'https://aux.iconspalace.com/uploads/1365895167103758766.png',
        anchor: [0.5, 1],
        scale: 0.2
      })
    })
  );

  cityArray.forEach(function(city) {
    addMapMarker(map, city[1], city[2], style);
  });

 var container = document.getElementById('popup');
 var content = document.getElementById('popup-content');
 var closer = document.getElementById('popup-closer');
 var overlay = new ol.Overlay({
   element: container,
   autoPan: true,
   autoPanAnimation: {
     duration: 250
   }
 });
 map.addOverlay(overlay);
 closer.onclick = function() {
   overlay.setPosition(undefined);
   closer.blur();
   return false;
 };

 map.on('singleclick', function (event) {
    if (map.hasFeatureAtPixel(event.pixel) === true) {
        var coordinate = event.coordinate;
        var feature = map.forEachFeatureAtPixel(event.pixel, function (feature, layer) {
          var coord = feature.getGeometry().getCoordinates();
          coord = ol.proj.transform(coord, 'EPSG:3857', 'EPSG:4326');
          cityArray.forEach(function(city) {
            if (coord[0] == city[1] || coord[1] == city[2]) {
              content.innerHTML = city[0];
              document.getElementById('city-image').src = "images/" + city[0].split(",")[0] + ".jpg";
              document.getElementById('city-image').style.display = "block";
              document.getElementById('default-text').style.display = "none";
            }
          });
        });
        overlay.setPosition(coordinate);
    } else {
      document.getElementById('city-image').src = "";
      document.getElementById('city-image').style.display = "none";
      document.getElementById('default-text').style.display = "block";
      overlay.setPosition(undefined);
      closer.blur();
    }
  });
});

function addMapMarker(map, lon, lat, style) {
    var layer = new ol.layer.Vector({
       source: new ol.source.Vector({
           features: [
               new ol.Feature({
                   geometry: new ol.geom.Point(ol.proj.fromLonLat([lon, lat]))
               })
           ]
       })
   });
  layer.setStyle(style);
  map.addLayer(layer);
}
