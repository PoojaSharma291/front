import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importing Module
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreModule    
  ],
  providers: [],
  exports: []
})
export class SharedModule { }
