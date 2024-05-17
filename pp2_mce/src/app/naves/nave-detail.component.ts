import { Component, Input } from '@angular/core';
import { Nave } from './nave.model';

@Component({
  selector: 'app-nave-detail',
  templateUrl: './nave-detail.component.html'
})
export class NaveDetailComponent {
  @Input() nave: Nave | null = null;
}
