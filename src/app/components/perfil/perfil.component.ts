import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ServiceCubos } from '../../service/service.cubos';
import { Router } from '@angular/router';
import Usuario from '../../models/Usuario';
import Compra from '../../models/Compra';

@Component({
    selector: 'app-perfil', templateUrl: './perfil.component.html', styleUrl: './perfil.component.css',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class PerfilComponent implements OnInit {
  public perfil!: Usuario;
  public show: boolean = false;
  public compras: Array<Compra> = [];
  constructor(private _service: ServiceCubos, private _router: Router, private _cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this._service.getPerfil().subscribe({
      next: (data) => { this.perfil = data; this._cdr.detectChanges(); },
      error: (error) => console.error(error)
    });
  }
  historialCompra() {
    this._service.getHistorialCompras().subscribe({
      next: (data) => { this.compras = data; this.show = true; this._cdr.detectChanges(); },
      error: (error) => console.error(error)
    });
  }
  comprar() { this._router.navigate(['/comprar']); }
}
