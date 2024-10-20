import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Router } from '@angular/router';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dropdownVisible: boolean = false;
  showChangePasswordForm: boolean = false; 
  

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.renderChart();
    this.renderlinechart();
  }
   

  //dropdownvisible: boolean = false;

  //toggledropdown(){
  //  this.dropdownvisible = !this.dropdownvisible;
  //}
  
  navVisible: boolean = false;
  
  toggleNav() {
    this.navVisible = !this.navVisible;
    const navLinks = document.querySelector('.nav-links') as HTMLElement;
    if (this.navVisible) {
      navLinks.classList.add('active');
    } else {
      navLinks.classList.remove('active');
    }
  }
  

  renderChart() {
    const chartElement = document.getElementById('BarChart') as HTMLCanvasElement;
    if (chartElement) {
      const ctx = chartElement.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'bar',
          data: {
          
            labels: ['task1', 'task2', 'task3','task4','task5'],
            datasets: [{
              label: 'Tasks',
              data: [298, 476, 789,132,700],
              backgroundColor: 'white',
              borderColor: 'black',
              borderWidth: 3
            }]
          },
          
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    }
  }

  //line chart

  renderlinechart() {
    const chartElement = document.getElementById('lineChart') as HTMLCanvasElement;
    if (chartElement) {
      const ctx = chartElement.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['task1', 'task2', 'task3','task4','task5'],
            datasets: [{
              label: 'Tasks',
              data: [298, 376, 789,132,700],
              backgroundColor: 'black',
              borderColor: 'white',
              borderWidth: 2
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    }
  }

  toggledropdown() {
    console.log("toggle admin");
    this.dropdownVisible = !this.dropdownVisible;
    
  }

  onProfileClick(event: Event) {
    event.preventDefault();
    console.log("go to profile");

    // Add your profile click logic here
  }

  onChangePasswordClick(event: Event) {
    event.preventDefault();
    console.log('Change Password ');
    // Toggle the visibility of change password form
    this.router.navigate(['/change-password']); // Example navigation
    this.showChangePasswordForm = true;
  }

  onLogoutClick(event: Event) {
    event.preventDefault();
    console.log('Logging out');
    this.logout();
  }

  logout() {
    // Remove authentication token
    localStorage.removeItem('authToken');

    // Navigate to the login page
    this.router.navigate(['/login']);
  }
}