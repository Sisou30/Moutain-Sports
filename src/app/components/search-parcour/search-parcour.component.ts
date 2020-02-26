import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ParcoursService } from '../../Services/ParcoursServices/parcours.service';

@Component({
  selector: 'app-search-parcour',
  templateUrl: './search-parcour.component.html',
  styleUrls: ['./search-parcour.component.scss']
})
export class SearchParcourComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar,private parcours: ParcoursService) { }

  ngOnInit() {
  }

  ButtonFavorite_Click(event,item){

    if(item.favorite)
 {
  this._snackBar.open("delete "+ item.title+ " to station favorite !", "", {
    duration: 2000,
  });
  item.favorite = false;
 } else
 {
  this._snackBar.open("add "+ item.title+ " to station favorite !", "", {
    duration: 2000,
  });
  item.favorite = true;
 }

}
}
