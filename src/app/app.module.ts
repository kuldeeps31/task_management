import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Ensure this is included
import { WordCountPipe } from './word-count.pipe';
import { AppComponent } from './app.component';
import { LoginSignupComponent } from './login-signup/login-signup.component'; // Adjust path as necessary
import { HttpClient, HttpClientXsrfModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { CoderunComponent } from './coderun/coderun.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
     // Make sure your component is declared here
     WordCountPipe
     ,
     ListComponent,
     NewTaskComponent,
     CoderunComponent
  ],
  imports: [
    //BrowserModule,
    HttpClientTestingModule,
    FormsModule, // Include FormsModule here
    ReactiveFormsModule,
    HttpClient,
    CommonModule,
    HttpClientXsrfModule
    
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent] // Ensure this points to your main component
})
export class AppModule { }
