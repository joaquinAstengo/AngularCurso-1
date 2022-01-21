import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import('@modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'tracaks',
    loadChildren: ()=> import('@modules/tracks/tracks.module').then(m => m.TracksModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
