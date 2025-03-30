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
import { zip } from 'rxjs';
import { PersonService } from './person.service';

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

  constructor(private personService: PersonService) 
  {

  }
person = {
  "firstName": '',
  "lastName": '',
  "addressLine1": '', // Added property to fix the error
  "addressLine2": '',    
  "city": '', // Added property to fix the error
  "country":  '', // Added property to fix the error
  "eircode":  '', // Added property for Postal / Zip Code
  "phoneNumber": '', // Add the phone property
  "emailID":  '', // Added state property  
}
person2 = {
dob: '',
state: '',
} 
person1 = 
{
  "firstName": "John 8",
  "lastName": "Doe",
  "addressLine1": "123 Main Street",
  "addressLine2": "Apt 4B",
  "city": "New York",
  "country": "USA",
  "eircode": "10001",
  "phoneNumber": "123-456-7890",
  "emailID": "john.doe@example.com"
}
onSubmit()
{
  console.log(this.person);
  this.personService.CreatePerson(this.person).subscribe(response => {
    console.log('Post Created:', response);
  });


}
}