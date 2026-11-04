import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceCubos } from '../../service/service.cubos';
import { Router } from '@angular/router';

@Component({ selector: 'app-menu', templateUrl: './menu.component.html', styleUrl: './menu.component.css' })
export class MenuComponent implements OnInit {
  public marcas: Array<string> = [];
  constructor(private _service: ServiceCubos, private _router: Router, private _cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this._service.getMarcas().subscribe({
      next: (data) => { this.marcas = data; this._cdr.detectChanges(); },
      error: (error) => console.error(error)
    });
  }
  cerarSesion(): void {
    localStorage.removeItem('authToken');
    this._router.navigate(['/']);
  }
}
