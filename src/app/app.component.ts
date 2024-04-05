import {Component, inject, Inject, Input} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DropdownFilterComponent} from './components/dropdown-filter/dropdown-filter.component';
import {DropdownMenuComponent} from './components/dropdown-menu/dropdown-menu.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {Circuit} from './models/circuit';
import {PodiumComponent} from './components/podium/podium.component';
import {WinnerInfoCardComponent} from './components/winner-info-card/winner-info-card.component';
import {F1Service} from './services/f1.service';
import {AsyncPipe} from '@angular/common';
import {
  RaceResultsTableComponent
} from './components/race-results-table/race-results-table.component';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DropdownFilterComponent, DropdownMenuComponent, FlexLayoutModule, PodiumComponent, WinnerInfoCardComponent, AsyncPipe, RaceResultsTableComponent, MatCardContent, MatCardTitle, MatCardHeader, MatCard],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  f1Service = inject(F1Service);
}
