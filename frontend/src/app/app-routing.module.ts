import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResisterloginComponent } from './components/resisterlogin/resisterlogin.component';

const routes: Routes = [
    { path: "", component: ResisterloginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
