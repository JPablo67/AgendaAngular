import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router: Router) {
  }

  // Example function to navigate to a child route
  goToMovies() {
    this.router.navigate(['/dashboard/movies']);
  }

}
