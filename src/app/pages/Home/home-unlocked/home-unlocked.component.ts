import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-home-unlocked',
  templateUrl: './home-unlocked.component.html',
  styleUrls: ['./home-unlocked.component.css']
})
export class HomeUnlockedComponent {
  constructor(private router: Router, private authService: AuthService) {}

  navigateToLogin(): void {
   this.authService.login();
   //this.router.navigate(['/home']);

  }

  navigateToRegister(): void {
    this.router.navigate(['/register']);
  }
}
