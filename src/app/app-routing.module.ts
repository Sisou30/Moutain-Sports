import { HomeComponent } from './components/home/home.component';
import { ParcoursComponent } from './components/parcours/parcours.component';
import { LoadParcourComponent } from './components/load-parcour/load-parcour.component';
import { CreateParcoursComponent } from './components/create-parcours/create-parcours.component';
import { SearchParcourComponent } from './components/search-parcour/search-parcour.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
          {
            path: '',
            component: ParcoursComponent,
          },
          {
            path: 'Parcours',
            component: ParcoursComponent,
          },
          {
            path: 'LoadParcour',
            component: LoadParcourComponent,
          },
          {
            path: 'CreateParcours',
            component: CreateParcoursComponent,
          },
          {
            path: 'SearchParcour',
            component: SearchParcourComponent,
          }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
