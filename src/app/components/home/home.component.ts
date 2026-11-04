import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import Cubo from '../../models/Cubo';
import { ServiceCubos } from '../../service/service.cubos';

@Component({
    selector: 'app-home', templateUrl: './home.component.html', styleUrl: './home.component.css',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HomeComponent implements OnInit {
  public cubos: Array<Cubo> = [];
  constructor(private _service: ServiceCubos, private _cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this._service.getCubos().subscribe({
      next: (data) => { this.cubos = data; this._cdr.detectChanges(); },
      error: (error) => console.error(error)
    });
  }
}
