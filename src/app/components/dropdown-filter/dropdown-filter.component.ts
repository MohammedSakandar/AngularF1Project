import {Component, EventEmitter, inject, OnDestroy, OnInit, Output} from '@angular/core';
import {F1Service} from '../../services/f1.service';
import {Subscription} from 'rxjs';
import {FormsModule} from '@angular/forms';
import {AsyncPipe} from '@angular/common';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatOption, MatSelect} from '@angular/material/select';

@Component({
  selector: 'app-dropdown-filter',
  standalone: true,
  imports: [
    FormsModule,
    AsyncPipe,
    MatLabel,
    MatFormField,
    MatSelect,
    MatOption
  ],
  templateUrl: './dropdown-filter.component.html',
  styleUrl: './dropdown-filter.component.css'
})
export class DropdownFilterComponent implements  OnInit{
  f1Service = inject(F1Service);
  showDropdown: boolean = false;

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  selectOption(option: string) {
    this.showDropdown = false;
    this.f1Service.fetchRaces(option)
  }

  ngOnInit(): void {
    this.f1Service.getSeasons();
  }
}
