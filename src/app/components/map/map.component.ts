import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map.js';
import Overlay from 'ol/Overlay.js';
import View from 'ol/View.js';
import {toStringHDMS} from 'ol/coordinate.js';
import TileLayer from 'ol/layer/Tile.js';
import {fromLonLat, toLonLat} from 'ol/proj.js';
import OSM from 'ol/source/OSM.js';

import Feature from 'ol/Feature.js';
import Point from 'ol/geom/Point.js';
import {Tile, Vector as VectorLayer} from 'ol/layer.js';
import TileJSON from 'ol/source/TileJSON.js';
import VectorSource from 'ol/source/Vector.js';
import {Icon, Style} from 'ol/style.js';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map;
  view;
    constructor() { }

  ngOnInit() {

    this.initilizeMap();
    this.setpointtree();
    this.view.setCenter([-3.683333, 40.4]);

  }

// SetPoint(){

//   var pos = fromLonLat([4.083333, 44.133333],'EPSG:4326');

//   // Vienna marker
//   var marker = new Overlay({
//     position: pos,
//     positioning: 'center-center',
//     element: document.getElementById('marker'),
//     stopEvent: false
//   });
//   this.map.addOverlay(marker);

//   // Vienna label
//   var vienna = new Overlay({
//     position: pos,
//     element: document.getElementById('vienna')
//   });
//   this.map.addOverlay(vienna);

//   // Popup showing the position the user clicked
//   var popup = new Overlay({
//     element: document.getElementById('popup')
//   });
//   this.map.addOverlay(popup);

//   this.map.on('click', function(evt) {
//     var element = popup.getElement();
//     var coordinate = evt.coordinate;
//     var hdms = toStringHDMS(toLonLat(coordinate));

    
//     element.popover('destroy');
//     popup.setPosition(coordinate);
//     element.popover({
//       placement: 'top',
//       animation: false,
//       html: true,
//       content: '<p>The location you clicked was:</p><code>' + hdms + '</code>'
//     });
//     element.popover('show');
//   });

// }

// SetpointTwo(){
//   var rome = new Feature({
//     geometry: new Point(fromLonLat([12.5, 41.9]))
//   });

//   var london = new Feature({
//     geometry: new Point(fromLonLat([-0.12755, 51.507222]))
//   });

//   var madrid = new Feature({
//     geometry: new Point(fromLonLat([-3.683333, 40.4]))
//   });

//   rome.setStyle(new Style({
//     image: new Icon(/** @type {module:ol/style/Icon~Options} */ ({
//       anchorXUnits: 'fraction',
//       anchorYUnits: 'fraction',
//       src: '../../../assets/mountains.png'
//     }))
//   }));

//   london.setStyle(new Style({
//     image: new Icon(/** @type {module:ol/style/Icon~Options} */ ({
//       color: '#4271AE',
//       crossOrigin: 'anonymous',
//       src: 'E:\Moutain Sports\Moutain Sports\src\assets\mountains.png'
//     }))
//   }));

//   madrid.setStyle(new Style({
//     image: new Icon(/** @type {module:ol/style/Icon~Options} */ ({
//       color: [113, 140, 0],
//       crossOrigin: 'anonymous',
//       src: 'E:\Moutain Sports\Moutain Sports\src\assets\mountains.png'
//     }))
//   }));


//   var vectorSource = new VectorSource({
//     features: [rome, london, madrid]
//   });

//   var vectorLayer = new VectorLayer({
//     source: vectorSource
//   });

//   var rasterLayer = new TileLayer({
//     source: new TileJSON({
//       url: 'https://api.tiles.mapbox.com/v3/mapbox.geography-class.json?secure',
//       crossOrigin: ''
//     })
//   });

//   var map = new Map({
//     layers: [rasterLayer, vectorLayer],
//     target: document.getElementById('map'),
//     view: new View({
//       center: fromLonLat([2.896372, 44.60240]),
//       zoom: 3
//     })
//   });
// }


setpointtree(){
  var markers = new VectorLayer.Markers( "Markers" );
this.map.addLayer(markers);

var size = new Style.Size(21,25);
var offset = new Style.Pixel(-(size.w/2), -size.h);
var icon = new Icon('http://www.openlayers.org/dev/img/marker.png', size, offset);
markers.addMarker(new VectorLayer.Markers(new fromLonLat.LonLat(4.083333, 44.133333),icon));
markers.addMarker(new VectorLayer.Markers(new fromLonLat.LonLat(4.083333, 44.133333),icon.clone()));
}


  initilizeMap() {

    var layer = new TileLayer({
      source: new OSM()
    });

    this.view = new View({
      center: [0, 0],
      projection : 'EPSG:4326',// longitude,lattitude mondiale
      zoom: 15
    });

    this.map = new Map({
      layers: [layer],
      target: 'map',
      view: this.view
      });
  }
}