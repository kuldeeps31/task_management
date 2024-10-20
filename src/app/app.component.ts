import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink,Route,Router} from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TaskManagementSystem';

  //constructor(private router:Router){}

  //navigateToSecondPage() {
  // this.router.navigate(['/login']);
  //}
  //<button (click)="navigateToSecondPage()">Go to Second Page</button>
}
