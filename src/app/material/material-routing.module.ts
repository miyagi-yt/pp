import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InputComponent } from './input/input.component';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [
  { path: 'input', component: InputComponent },
  { path: 'tree', component: TreeComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }
