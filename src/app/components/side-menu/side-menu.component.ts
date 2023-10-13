import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/Login/User';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
   usuario: User = {
    username: '',
    password: '',
    email: '',
    name: ''
  };
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    const user = this.authService.getUser();
    if(user){
      this.usuario.name = user?.['name'];
    }
  }

  logout(): void {
    // Chame o método de logout do seu AuthService aqui
    this.authService.logout();
  }
}
