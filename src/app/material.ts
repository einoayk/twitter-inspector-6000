import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';


@NgModule({
  imports: [MatButtonModule, 
    MatCheckboxModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatCardModule, 
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDividerModule,
    MatListModule],
  exports: [MatButtonModule, 
    MatCheckboxModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatCardModule, 
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDividerModule,
    MatListModule],
})
export class MaterialModule { }