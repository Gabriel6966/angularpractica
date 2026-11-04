import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import Cubo from '../../models/Cubo';
import { ServiceCubos } from '../../service/service.cubos';
import { ActivatedRoute } from '@angular/router';

@Component({ selector: 'app-cubos', templateUrl: './cubos.component.html', styleUrl: './cubos.component.css' })
export class CubosComponent implements OnInit {
  public cubos: Array<Cubo> = [];
  constructor(private _service: ServiceCubos, private _activated: ActivatedRoute, private _cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this._activated.params.subscribe(params => {
      this._service.getCubosByMarca(params['marca']).subscribe({
        next: (data) => { this.cubos = data; this._cdr.detectChanges(); },
        error: (error) => console.error(error)
      });
    });
  }
}
