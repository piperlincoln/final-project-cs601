// The list of my favorite European cities and their locations.
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
 * It also sets up event listeners to open popups when the markers are clicked.
 *
 * Author: Piper Lincoln
 * Reference: https://openlayers.org/en/latest/doc/quickstart.html
 */
domReady(function() {
  // Create the map object. Set the center in Europe and zoom in initially.
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

  // Create the style of the map icons to be pink thumb tacks.
  var style = (
    new ol.style.Style({
      image: new ol.style.Icon({
        src: 'https://aux.iconspalace.com/uploads/1365895167103758766.png',
        anchor: [0.5, 1],
        scale: 0.2
      })
    })
  );

  // Add a map marker for each city in the array.
  cityArray.forEach(function(city) {
    addMapMarker(map, city[1], city[2], style);
  });

  // Create the popups for the markers on the map.
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

  // Add the popups for the map markers to the map.
  map.addOverlay(overlay);
  closer.onclick = function() {
    overlay.setPosition(undefined);
    closer.blur();
    return false;
  };

  // Add the event listener to open the popups for each map marker.
  map.on('singleclick', function (event) {
    if (map.hasFeatureAtPixel(event.pixel) === true) {
      var coordinate = event.coordinate;
      var feature = map.forEachFeatureAtPixel(event.pixel, function (feature) {
        var coord = feature.getGeometry().getCoordinates();
        coord = ol.proj.transform(coord, 'EPSG:3857', 'EPSG:4326');
        cityArray.forEach(function(city) {
          if (coord[0] == city[1] || coord[1] == city[2]) {
            // Change the popup content to the name of the city.
            content.innerHTML = city[0];
            // Get the relevant city image and display it on the right.
            document.getElementById('city-image').src = "images/" + city[0].split(",")[0] + ".jpg";
            document.getElementById('city-image').style.display = "block";
            document.getElementById('default-text').style.display = "none";
          }
        });
      });
      overlay.setPosition(coordinate);
    } else {
      // Hide the city image on the right.
      document.getElementById('city-image').src = "";
      document.getElementById('city-image').style.display = "none";
      document.getElementById('default-text').style.display = "block";
      overlay.setPosition(undefined);
      closer.blur();
    }
  });
});

/*
 * This function creates a marker and adds it to the map.
 *
 * Author: Piper Lincoln
 * Reference: https://openlayers.org/en/latest/doc/quickstart.html
 */
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
