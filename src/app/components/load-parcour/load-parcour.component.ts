import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { loadparcouranimations } from './load-parcour-annimation';
import {MatSnackBar,MatDialog,MatDialogRef} from '@angular/material';

import Map from 'ol/Map.js';
import View from 'ol/View.js';
import { fromLonLat} from 'ol/proj.js';
import OSM from 'ol/source/OSM.js';
import Feature from 'ol/Feature.js';
import Point from 'ol/geom/Point.js';
import VectorSource from 'ol/source/Vector.js';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer.js';
import GPX from 'ol/format/GPX.js';
import { Circle as CircleStyle, Fill, Stroke, Style, Icon } from 'ol/style.js';
import { stringify } from '@angular/compiler/src/util';
import { DialogLoadParcoursComponent } from '../dialog-load-parcours/dialog-load-parcours.component';
import Overlay from 'ol/Overlay';

@Component({
  selector: 'app-load-parcour',
  templateUrl: './load-parcour.component.html',
  styleUrls: ['./load-parcour.component.scss'],
  animations: loadparcouranimations
})
export class LoadParcourComponent implements AfterViewInit, OnInit {

  @ViewChild("myimg") elementView: ElementRef;
  element: ElementRef<any>;

  ngAfterViewInit(): void {
    this.element = this.elementView.nativeElement;
  }

  constructor(private snackBar: MatSnackBar,private dialogLoad: MatDialog) { }

  returnDataDialogRef: MatDialogRef<DialogLoadParcoursComponent>;
  filePathName : string;

  fabButtons = [
    {
      icon: 'arrow_downward'
    }
  ];
  buttons = [
  ];
  fabTogglerState = 'inactive';


  onSelect(btn: any) {
    if (btn.icon == 'arrow_downward') {
      this.returnDataDialogRef = this.dialogLoad.open(DialogLoadParcoursComponent);
    this.returnDataDialogRef.afterClosed().subscribe(
      data => this.filePathName = data);
      console.log("Dialog output:", this.filePathName);
      console.log("arrow_downward");
      //this.LoadGpx(this.filePathName);
    }
  }

  showItems() {
    this.fabTogglerState = 'active';
    this.buttons = this.fabButtons;
  }

  hideItems() {
    this.fabTogglerState = 'inactive';
    this.buttons = [];
  }

  onToggleFab() {
    this.buttons.length ? this.hideItems() : this.showItems();
  }


  map;
  view;

  ngOnInit() {

    this.initilizeMap();
    var ListPoint = this.CreatePoint();
    this.setpoint(ListPoint);
    this.popup();


  }

  popup(){

    var iconFeature = new Feature({
      geometry:new Point(fromLonLat([5.064360, 46.090510])),
      name: 'Null Island',
      population: 4000,
      rainfall: 500
    });

    var iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: '../../../assets/ic_launcher.png',
      })
    });

    iconFeature.setStyle(iconStyle);

    var vectorSource = new VectorSource({
      features: [iconFeature]
    });

    var vectorLayer = new VectorLayer({
      source: vectorSource
    });

    this.map.addLayer(vectorLayer);

     let elementtest = document.getElementById('popup');
     console.table(elementtest);
     console.table(this.map);

    var popupe = new Overlay({
      element: elementtest,
      positioning: 'bottom-center',
      stopEvent: false,
      offset: [0, -50]
    });
    this.map.addOverlay(popupe);

    // display popup on click
    // this.map.on('click', function(evt) {
    //   var feature = this.map.forEachFeatureAtPixel(evt.pixel,
    //     function(feature) {
    //       return feature;
    //     });

        this.map.on('click', function(evt){
          var feature = evt.map.forEachFeatureAtPixel(evt.pixel, function(feature) {
                           return feature;
                        });
          // if (feature) {
          //   console.log("Feature found");
          // }
      //  });

      if (feature) {
        var coordinates = feature.getGeometry().getCoordinates();
        popupe.setPosition(coordinates);
        this.map.popover({
          placement: 'top',
          html: true,
          content: feature.get('name')
        });
        this.map.popover('show');
      } else {
        this.map.popover('destroy');
      }
    });


    // // change mouse cursor when over marker
    // this.map.on('pointermove', function(e) {
    //   if (e.dragging) {
    //     popupe.element.popover('destroy');
    //     return;
    //   }
    //   var pixel = e.map.getEventPixel(e.originalEvent);
    //   var hit = e.map.hasFeatureAtPixel(pixel);
    //   e.map.getTarget().style.cursor = hit ? 'pointer' : '';
    // });

  }


  LoadGpx() {
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
      style: function (feature) {
        return styletoto[feature.getGeometry().getType()];
        // return styletoto['point'];
      }
    });

    this.map.addLayer(vectorGpx);

    var displayFeatureInfo = function (pixel) {
      var features = [];
      this.map.forEachFeatureAtPixel(pixel, function (feature) {
        features.push(feature);
      });
      if (features.length > 0) {
        var info = [];
        var i, ii;
        for (i = 0, ii = features.length; i < ii; ++i) {
          info.push(features[i].get('desc'));
          console.log(stringify("info:" + info));
        }
        document.getElementById('info').innerHTML = info.join(', ') || '(unknown)';
        this.map.getTarget().style.cursor = 'pointer';
      } else {
        document.getElementById('info').innerHTML = '&nbsp;';
        this.map.getTarget().style.cursor = '';
      }
    };

  }

  setpoint(ListPoint) {
    var vectorLayer = new VectorLayer({
      source: ListPoint
    });
    this.map.addLayer(vectorLayer);
  }

  CreatePoint() {
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
      image: new Icon(/** @type {module:ol/style/Icon~Options} */({
        color: '#8959A8',
        crossOrigin: 'anonymous',
        src: '../../../assets/mountains (1).png',
        scale: 0.1
      }))
    }));

    AlpesHuez.setStyle(new Style({
      image: new Icon(/** @type {module:ol/style/Icon~Options} */({
        color: '#4271AE',
        crossOrigin: 'anonymous',
        src: '../../../assets/mountains (1).png',
        scale: 0.1
      }))
    }));

    Chamrousse.setStyle(new Style({
      image: new Icon(/** @type {module:ol/style/Icon~Options} */({
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
console.log("init map ");
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



