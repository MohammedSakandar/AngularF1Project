import {Component, inject, Input} from '@angular/core';
import {F1Service} from '../../services/f1.service';
import {async} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {MatCard, MatCardContent} from '@angular/material/card';
import {WikiServiceService} from '../../services/wiki-service.service';

@Component({
  selector: 'app-winner-info-card',
  standalone: true,
  imports: [
    AsyncPipe,
    MatCardContent,
    MatCard
  ],
  templateUrl: './winner-info-card.component.html',
  styleUrl: './winner-info-card.component.css'
})
export class WinnerInfoCardComponent {
f1Service = inject(F1Service)
  wikiService = inject(WikiServiceService)


}

