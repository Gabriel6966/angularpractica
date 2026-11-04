import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import Cubo from '../../models/Cubo';
import { ServiceCubos } from '../../service/service.cubos';
import { Router } from '@angular/router';

@Component({
    selector: 'app-comprar', templateUrl: './comprar.component.html', styleUrl: './comprar.component.css',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ComprarComponent implements OnInit {
  public cubos: Array<Cubo> = [];
  @ViewChild('selectcubo') selectcubo!: ElementRef;
  constructor(private _service: ServiceCubos, private _router: Router, private _cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this._service.getCubos().subscribe({
      next: (data) => { this.cubos = data; this._cdr.detectChanges(); },
      error: (error) => console.error(error)
    });
  }
  comprar() {
    if (!this.selectcubo.nativeElement.value) return;
    this._service.comprarCubo(this.selectcubo.nativeElement.value).subscribe({
      next: () => this._router.navigate(['/perfil']),
      error: (error) => console.error('Error al comprar', error)
    });
  }
}
