import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Login from '../../models/login';
import { ServiceCubos } from '../../service/service.cubos';
import { Router } from '@angular/router';

@Component({ selector: 'app-login', templateUrl: './login.component.html', styleUrl: './login.component.css' })
export class LoginComponent implements OnInit {
  @ViewChild('userName') userName!: ElementRef;
  @ViewChild('password') password!: ElementRef;
  public login: Login = new Login('', '');
  constructor(private _service: ServiceCubos, private _router: Router) {}
  ngOnInit(): void {
    if (localStorage.getItem('authToken')) this._router.navigate(['/perfil']);
  }
  getToken() {
    this.login.email = this.userName.nativeElement.value;
    this.login.password = this.password.nativeElement.value;
    this._service.getToken(this.login).subscribe({
      next: (data) => {
        localStorage.setItem('authToken', data.response);
        this._router.navigate(['/perfil']);
      },
      error: (error) => console.error('Error al iniciar sesión', error)
    });
  }
}
