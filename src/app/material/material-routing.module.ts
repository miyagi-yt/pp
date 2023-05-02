import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ButtonComponent } from './button/button.component';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [
  { path: 'button', component: ButtonComponent },
  { path: 'tree', component: TreeComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }
