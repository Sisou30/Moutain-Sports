import { HomeComponent } from './components/home/home.component';
import { WinterHomeComponent } from './components/winter-home/winter-home.component';
import { SummerHomeComponent } from './components/summer-home/summer-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'WinterHome',
        component: WinterHomeComponent,
    },
    {
        path: 'SummerHome',
        component: SummerHomeComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }