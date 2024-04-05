import {Component, inject, Input} from '@angular/core';
import {F1Service} from '../../services/f1.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-podium',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './podium.component.html',
  styleUrl: './podium.component.css'
})
export class PodiumComponent {
f1Service = inject(F1Service)
  podiumData: string[] = [];

  getStandHeight(position: string): number {
    const place = parseInt(position);
    return 100 - (place === 1 ? 0 : (place === 2 ? 20 : 40));
  }

  checkGreaterThanThree(position: string){
    return parseInt(position) > 3
  }

  getStandColor(position: string): string {
    const place = parseInt(position);
    switch (place) {
      case 1:
        return 'gold';
      case 2:
        return 'silver';
      case 3:
        return 'bronze';
      default:
        return 'white';
    }
  }
}
