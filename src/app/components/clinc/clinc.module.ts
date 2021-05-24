import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClincComponent } from './clinc.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [ClincComponent],
  imports: [
    CommonModule, MatCardModule
  ],
  exports: [ClincComponent],
  providers: []
})
export class ClincModule { }
