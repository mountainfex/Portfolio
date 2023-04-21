import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImprintComponent } from './imprint/imprint.component';
import { StartComponent } from './start/start.component';
const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'imprint', component: ImprintComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ReactiveFormsModule],
  exports: [RouterModule, FormsModule, ReactiveFormsModule]
})
export class AppRoutingModule { 
}