import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.css']
})
export class AuthCallbackComponent {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // A sequência de login inicial inclui a tentativa de login e o refresh silencioso
    console.log('Running Initial Login Sequence');
    this.authService.runInitialLoginSequence().then(() => {
      console.log('entrou aqui')
      // Se o login for bem-sucedido, redirecione para a página inicial ou para uma página desejada
      if (this.authService.hasValidToken()) {
        this.router.navigate(['home']); // Navegue para a página inicial
      } else {
        // Se houve um problema com o login, você pode querer redirecionar para uma página de erro ou permanecer na página de login
        console.error('O login falhou');
      }
    });
  }
}
