import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-person',
  imports: [RouterModule, 
    CommonModule, 
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    FormsModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule
   ],
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  first: string = '';
  last: string = '';
  phone: string = ''; // Add the phone property
  dob: string = ''; // Added property for date of birth
  addressline: string = ''; // Added property to fix the error
  city: string = ''; // Added property to fix the error
  state: string = ''; // Added state property
  country: string = ''; // Added property to fix the error
  Eircode: string = ''; // Added property for Postal / Zip Code
  
}