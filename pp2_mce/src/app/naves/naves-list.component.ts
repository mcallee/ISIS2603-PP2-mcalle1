import { Component, OnInit } from '@angular/core';
import { NaveService } from './nave.service';
import { Nave } from './nave.model';

@Component({
  selector: 'app-naves-list',
  templateUrl: './naves-list.component.html'
})
export class NavesListComponent implements OnInit {
  naves: Nave[] = [];
  navesRebelion: number = 0;
  navesImperio: number = 0;
  navesNeutral: number = 0;
  selectedNave: Nave | null = null;

  constructor(private naveService: NaveService) { }

  ngOnInit(): void {
    this.naveService.getNaves().subscribe(data => {
      this.naves = data;
      this.calculateBandoCounts();
    });
  }

  calculateBandoCounts(): void {
    this.navesRebelion = this.naves.filter(nave => nave.bando === 'Rebelión').length;
    this.navesImperio = this.naves.filter(nave => nave.bando === 'Imperio').length;
    this.navesNeutral = this.naves.filter(nave => nave.bando === 'Neutral').length;
  }

  onSelect(nave: Nave): void {
    this.selectedNave = nave;
  }

  truncateText(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  }
}
