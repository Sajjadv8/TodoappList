import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { SLinComponent } from './slin/slin.component';

const routes: Routes = [
  {path : 'list' , component : ListComponent},
  {path : 'form' , component : FormComponent},
  {path : 'slin' , component : SLinComponent},
  {path : 'about' , component : AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
