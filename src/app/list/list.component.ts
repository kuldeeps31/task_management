import { CommonModule } from '@angular/common';
import { Component,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
//import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
constructor(private router:Router){}
  navigateToDashboard(){
    console.log('navigaate to dashboard');
    this.router.navigate(['dashboard']);

  }
}
