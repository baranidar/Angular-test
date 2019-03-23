import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { starComponent } from './star.component';


@NgModule({
  declarations: [starComponent],
  imports: [
    CommonModule
  ],
  exports: [
    starComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
