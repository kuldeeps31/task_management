import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Ensure this is included
import { WordCountPipe } from './word-count.pipe';
import { AppComponent } from './app.component';
import { LoginSignupComponent } from './login-signup/login-signup.component'; // Adjust path as necessary
import { HttpClient, HttpClientXsrfModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
     // Make sure your component is declared here
     WordCountPipe
     ,
     ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Include FormsModule here
    ReactiveFormsModule,
    HttpClient
    
  ],
  providers: [],
  bootstrap: [AppComponent] // Ensure this points to your main component
})
export class AppModule { }
