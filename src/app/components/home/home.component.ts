import { Component, OnInit } from '@angular/core';
import { LoadingComponent } from '../loading/loading.component';
import { MatDialog } from '@angular/material';
import { ParcoursService } from '../../Services/ParcoursServices/parcours.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isMenuOpen = false;
  contentMargin = 70;

  constructor(private dialogLoad: MatDialog,private parcours: ParcoursService) { }

sindeNavAction()
{
  this.isMenuOpen = !this.isMenuOpen;
  if(!this.isMenuOpen)
  {
    this.contentMargin = 70;
  }else{
    this.contentMargin = 250;
  }
}

onLoadingClick(): void {
  console.log("loading dialog")
  this.dialogLoad.open(LoadingComponent);
}

  ngOnInit() {
    this.parcours.listParcoursInitialize();
  }

}
