//import { Component } from '@angular/core';
//import { NgModel } from '@angular/forms';
//import { RouterOutlet ,RouterLink,Route,Router} from '@angular/router';
//import { Component, OnInit } from '@angular/core';
//import { Chart, registerables } from 'chart.js';
////import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms';
//import { NgModule } from '@angular/core';
//import { CodeExecutionService } from '../code-execution.service';
//import { CommonModule } from '@angular/common';
//import { HttpClientModule } from '@angular/common/http';
//import { provideHttpClient } from '@angular/common/http';


//@Component({
//  selector: 'app-coderun',
//  standalone: true,
//  imports: [FormsModule,CommonModule],
//  templateUrl: './coderun.component.html',
//  styleUrl: './coderun.component.css'
//})
//export class CoderunComponent {

//  code: string = '';
//  result: any = null;

//  constructor(private codeExecutionService: CodeExecutionService) {}

//  submitCode() {
//    this.codeExecutionService
//      .executeCode( this.code)
//      .subscribe((res: any) => {
//        this.result = res;
//      });  

//  }
//}

import { Component } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';  // For two-way binding
import { CommonModule } from '@angular/common'; // For common Angular directives
import { CodeExecutionService } from '../code-execution.service'; // Assuming this service exists
import { provideHttpClientTesting } from '@angular/common/http/testing';
//import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-coderun',
  standalone: true,
  imports: [FormsModule, CommonModule],  // Import required modules
  templateUrl: './coderun.component.html',
  styleUrls: ['./coderun.component.css']
})
export class CoderunComponent {

  code: string = '';   // The code entered by the user
  result: any = null;  // The result of executing the code

  constructor(private codeExecutionService: CodeExecutionService) {}

  // Method to submit code

  
  submitCode() {
    this.codeExecutionService.executeCode(this.code).subscribe((res: any) => {
      this.result = res;  // Assign the result to display
    }, error => {
      this.result = 'Error executing the code';
      console.error('Execution Error:', error);
    });
  }
}


