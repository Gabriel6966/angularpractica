import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import Cubo from '../../models/Cubo';
import { ServiceCubos } from '../../service/service.cubos';
import { ActivatedRoute } from '@angular/router';
import Comentario from '../../models/Comentario';

@Component({
    selector: 'app-detalles',
    templateUrl: './detalles.component.html',
    styleUrl: './detalles.component.css',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DetallesComponent implements OnInit {
  public cubo!: Cubo;
  public comentarios: Array<Comentario> = [];
  constructor(
    private _service: ServiceCubos,
    private _activated: ActivatedRoute,
    private _cdr: ChangeDetectorRef,
  ) {}
  ngOnInit(): void {
    this._activated.params.subscribe((params) => {
      this._service.getCuboById(params['id']).subscribe({
        next: (data) => {
          this.cubo = data;
          this._cdr.detectChanges();
        },
        error: (error) => console.error(error),
      });
      this._service.getComentarios(params['id']).subscribe({
        next: (data) => {
          this.comentarios = data;
          this._cdr.detectChanges();
        },
        error: (error) => console.error(error),
      });
    });
  }
}
