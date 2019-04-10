import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map.js';
import Overlay from 'ol/Overlay.js';
import View from 'ol/View.js';
import {toStringHDMS} from 'ol/coordinate.js';
import {fromLonLat, toLonLat} from 'ol/proj.js';
import OSM from 'ol/source/OSM.js';
import Feature from 'ol/Feature.js';
import Point from 'ol/geom/Point.js';
import TileJSON from 'ol/source/TileJSON.js';
import VectorSource from 'ol/source/Vector.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import GPX from 'ol/format/GPX.js';
import {Circle as CircleStyle, Fill, Stroke, Style,Icon} from 'ol/style.js';
import { stringify } from '@angular/compiler/src/util';



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
     var ListPoint = this.CreatePoint();
     this.setpoint(ListPoint);
     this.LoadGpx();
  }


LoadGpx(){
  


  var styletoto = {
    'Point': new Style({
      image: new CircleStyle({
        fill: new Fill({
          color: 'rgba(255,255,0,0.4)'
        }),
        radius: 5,
        stroke: new Stroke({
          color: '#ff0',
          width: 1
        })
      })
    }),
    'LineString': new Style({
      stroke: new Stroke({
        color: '#f00',
        width: 3
      })
    }),
    'MultiLineString': new Style({
      stroke: new Stroke({
        color: '#0f0',
        width: 3
      })
    })
  };

  var vectorGpx = new VectorLayer({
    source: new VectorSource({
      url: '../../../assets/bike.gpx',
      format: new GPX()
    }),
    style: function(feature) {
      return styletoto['point'];
    }
  });

  this.map.addLayer(vectorGpx);

  var displayFeatureInfo = function(pixel) {
    var features = [];
    this.map.forEachFeatureAtPixel(pixel, function(feature) {
      features.push(feature);
    });
    if (features.length > 0) {
      var info = [];
      var i, ii;
      for (i = 0, ii = features.length; i < ii; ++i) {
        info.push(features[i].get('desc'));
        console.log(stringify("info:"+info));
      }
      document.getElementById('info').innerHTML = info.join(', ') || '(unknown)';
      this.map.getTarget().style.cursor = 'pointer';
    } else {
      document.getElementById('info').innerHTML = '&nbsp;';
      this.map.getTarget().style.cursor = '';
    }
  };
  
}

  setpoint(ListPoint){

    var vectorLayer = new VectorLayer({
      source: ListPoint
    });
    this.map.addLayer(vectorLayer);
  }

   CreatePoint(){

    var LesSaisies = new Feature({
      geometry: new Point(fromLonLat([6.538260, 45.758362]))
    });

    var AlpesHuez = new Feature({
      geometry: new Point(fromLonLat([6.064360, 45.090510]))
    });

    var Chamrousse = new Feature({
      geometry: new Point(fromLonLat([5.876630, 45.126460]))
    });

    LesSaisies.setStyle(new Style({
      image: new Icon(/** @type {module:ol/style/Icon~Options} */ ({
        color: '#8959A8',
        crossOrigin: 'anonymous',
        src: '../../../assets/mountains (1).png',
        scale: 0.1
      }))
    }));

    AlpesHuez.setStyle(new Style({
      image: new Icon(/** @type {module:ol/style/Icon~Options} */ ({
        color: '#4271AE',
        crossOrigin: 'anonymous',
        src: '../../../assets/mountains (1).png',
        scale: 0.1
      }))
    }));

    Chamrousse.setStyle(new Style({
      image: new Icon(/** @type {module:ol/style/Icon~Options} */ ({
        color: [113, 140, 0],
        crossOrigin: 'anonymous',
        src: '../../../assets/mountains (1).png',
        scale: 0.1
      }))
    }));

    var vectorSource = new VectorSource({
      features: [LesSaisies, AlpesHuez, Chamrousse]
    });

    return vectorSource;
  }

  initilizeMap() {

    var rasterLayer = new TileLayer({
      source: new OSM()
    });

    this.map = new Map({
      layers: [rasterLayer],
      target: document.getElementById('map'),
      view: new View({
        center: fromLonLat([5.876016, 45.376810]),
        zoom: 7
      })
    });
  }
}