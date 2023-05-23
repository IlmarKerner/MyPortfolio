import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: 'imprint', component: ImprintComponent },
  { path: '', component: StartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
