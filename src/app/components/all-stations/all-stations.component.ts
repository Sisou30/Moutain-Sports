import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-stations',
  templateUrl: './all-stations.component.html',
  styleUrls: ['./all-stations.component.scss']
})
export class AllStationsComponent implements OnInit {

  constructor() { }
   // tslint:disable-next-line:no-any
   data: any[] = [];

   ngOnInit(): void {
     this.loadData(1);
   }
 
   loadData(pi: number): void {
     this.data = new Array(1).fill({}).map((i, index) => {
       return {
         href: 'http://www.lessaisies.com',
         title: `Les Saisies`,
         avatar: 'https://www.lessaisies.com/templates/OT2016/images/logo_les_saisies.png',
         description: 'Ouvert',
         content: 'Les Saisies est une station française de sports d hiver située sur le col des Saisies et sur les communes d Hauteluce, Villard-sur-Doron, Crest-Voland et Cohennoz dans le département de la Savoie, en région Auvergne-Rhône-Alpes'
       };
     });
   }

}