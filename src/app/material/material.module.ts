import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';

import { MaterialRoutingModule } from './material-routing.module';
import { InputComponent } from './input/input.component';
import { TreeComponent } from './tree/tree.component';


@NgModule({
  declarations: [
    InputComponent,
    TreeComponent,
  ],
  imports: [
    CommonModule,

    /** Mat モジュール追加 */
    MatInputModule,
    MatIconModule,
    MatTreeModule,

    /** ページ */
    MaterialRoutingModule
  ]
})
export class MaterialModule { }
