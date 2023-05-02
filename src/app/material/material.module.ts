import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';

import { MaterialRoutingModule } from './material-routing.module';
import { ButtonComponent } from './button/button.component';
import { TreeComponent } from './tree/tree.component';


@NgModule({
  declarations: [
    ButtonComponent,
    TreeComponent,
  ],
  imports: [
    CommonModule,

    /** 追加 */
    MatButtonModule,
    MatIconModule,
    MatTreeModule,

    /** ページ */
    MaterialRoutingModule
  ]
})
export class MaterialModule { }
