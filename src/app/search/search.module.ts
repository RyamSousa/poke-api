import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search-page/search-page.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';



@NgModule({
  declarations: [
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatProgressBarModule,
  ],
})
export class SearchModule { }
