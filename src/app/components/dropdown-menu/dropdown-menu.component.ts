import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {DropdownFilterComponent} from '../dropdown-filter/dropdown-filter.component';
import {
  DropdownCircuitFilterComponent
} from '../dropdown-circuit-filter/dropdown-circuit-filter.component';
import {Circuit} from '../../models/circuit';
import {F1Service} from '../../services/f1.service';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [
    DropdownFilterComponent,
    DropdownCircuitFilterComponent
  ],
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.css'
})
export class DropdownMenuComponent {
f1Service = inject(F1Service)
}
