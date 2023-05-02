import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';

import { MaterialRoutingModule } from './material-routing.module';
import { TreeComponent } from './tree/tree.component';


@NgModule({
  declarations: [
    TreeComponent
  ],
  imports: [
    CommonModule,

    /** 追加 */
    MatIconModule,
    MatTreeModule,

    /** ページ */
    MaterialRoutingModule
  ]
})
export class MaterialModule { }
