import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [
  { path: 'button', component: ButtonComponent },
  { path: 'input', component: InputComponent },
  { path: 'tree', component: TreeComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }
