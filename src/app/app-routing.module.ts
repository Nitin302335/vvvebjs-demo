import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { Template1Component } from './template1/template1.component';

const routes: Routes = [{
  path: 'test', component: TestComponent,
},
{
  path: 'template', component: Template1Component
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
