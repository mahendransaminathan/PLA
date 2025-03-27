import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './app/modules/home/home.component';
import { PersonComponent } from './app/modules/person/person.component';

bootstrapApplication(AppComponent, 
  {
    providers: [
      provideRouter([
        { path: 'home', component: HomeComponent},
        { path: 'person', component: PersonComponent },
        { path: '', redirectTo: 'home', pathMatch: 'full'}

      ]
      )
    ]
    })
  .catch((err) => console.error(err));
