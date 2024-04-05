import {Component, inject} from '@angular/core';
import {AsyncPipe, NgOptimizedImage} from '@angular/common';
import {F1Service} from '../../services/f1.service';
import {MatCell, MatHeaderCell, MatRow, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-race-results-table',
  standalone: true,
  imports: [
    AsyncPipe,
    NgOptimizedImage,
    MatCell,
    MatRow,
    MatHeaderCell,
    MatTableModule
  ],
  templateUrl: './race-results-table.component.html',
  styleUrl: './race-results-table.component.css'
})
export class RaceResultsTableComponent {
 f1Service = inject(F1Service)
  displayedColumns: string[] = ['position', 'nationality', 'driver', 'time', 'points'];

  convertToNumber(number: string){
   return parseInt(number);
  }
}
