import {Component, EventEmitter, inject, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {F1Service} from '../../services/f1.service';
import {Subscription} from 'rxjs';
import {Circuit} from '../../models/circuit';
import {AsyncPipe} from '@angular/common';
import {Race} from '../../models/race';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from '@angular/material/autocomplete';
import {MatInput} from '@angular/material/input';
import {MatSelect} from '@angular/material/select';
import {WikiServiceService} from '../../services/wiki-service.service';

@Component({
  selector: 'app-dropdown-circuit-filter',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    AsyncPipe,
    MatFormField,
    MatAutocomplete,
    MatOption,
    MatAutocompleteTrigger,
    MatInput,
    MatLabel,
    MatSelect
  ],
  templateUrl: './dropdown-circuit-filter.component.html',
  styleUrl: './dropdown-circuit-filter.component.css'
})
export class DropdownCircuitFilterComponent{
  f1Service = inject(F1Service);
  wikiService = inject(WikiServiceService)
  showDropdown: boolean = false;

  selectOption(option: Race) {
    this.f1Service.fetchResults(this.f1Service.selectedSeason, option.round)
    this.showDropdown = false;
    this.searchImage()
  }

  searchImage(){
    let driverFullName = '';
    this.f1Service.results$.getValue().MRData.RaceTable.Races.forEach( race =>{ race.Results.forEach( result => { if(result.position === '1'){driverFullName = result.Driver.givenName + '' + result.Driver.familyName}})});
    this.wikiService.searchImage(driverFullName);
  }
}
