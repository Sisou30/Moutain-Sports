import { Component, OnInit } from '@angular/core';
import {MatSnackBar,MatDialog} from '@angular/material';

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
import { loadparcouranimations } from '../load-parcour/load-parcour-annimation';


@Component({
  selector: 'app-create-parcours',
  templateUrl: './create-parcours.component.html',
  styleUrls: ['./create-parcours.component.scss'],
  animations: loadparcouranimations
})
export class CreateParcoursComponent implements OnInit {

    constructor(private snackBar: MatSnackBar,private dialogLoad: MatDialog) { }

    fabButtons = [
      {
        icon: 'timeline'
      },
      {
        icon: 'room'
      },
      // {
      //   icon: 'arrow_downward'
      // }
    ];
    buttons = [
    ];
    fabTogglerState = 'inactive';


    onSelect(btn: any) {
      if (btn.icon == 'timeline') {
        console.log("timeline");
      }
      if (btn.icon == 'room') {

        console.log("room");
      }
      // if (btn.icon == 'arrow_downward') {
      //   this.dialogLoad.open(DialogLoadParcoursComponent);
      //   console.log("arrow_downward");
      // }
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







