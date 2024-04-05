import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, catchError, of, retry, take} from 'rxjs';
import {Season, SeasonsResponse} from '../models/season';
import {Circuit, CircuitResponse} from '../models/circuit';
import {Race, RaceResponse} from '../models/race';
import {Result, ResultsResponse} from '../models/results';
import {WikiServiceService} from './wiki-service.service';

@Injectable({
  providedIn: 'root'
})
export class F1Service {
  API_URL: string = 'https://ergast.com/api/f1/';
  selectedSeason: string = '';
  selectedRace: Race | undefined;


  seasons$ = new BehaviorSubject<string[]>([]);
  races$ = new BehaviorSubject<Race[]>([]);
  results$ = new BehaviorSubject<ResultsResponse>({} as ResultsResponse);

  constructor(private http: HttpClient) { }

  public countryList: { [key: string]: string } = {
    American: 'US',
    Argentine: 'AR',
    Australian: 'AU',
    Austrian: 'AT',
    Belgian: 'BE',
    Brazilian: 'BR',
    British: 'GB',
    Canadian: 'CA',
    Colombian: 'CO',
    Danish: 'DK',
    Dutch: 'NL',
    Finnish: 'FI',
    French: 'FR',
    German: 'DE',
    Indonesian: 'ID',
    Irish: 'IE',
    Italian: 'IT',
    Japanese: 'JP',
    Mexican: 'MX',
    Monegasque: 'MC',
    'New Zealander': 'NZ',
    Russian: 'RU',
    'South African': 'ZA',
    Spanish: 'ES',
    Swedish: 'SE',
    Swiss: 'CH',
    Thai: 'TH',
    Venezuelan: 'VE',
    Polish: 'PL',
    Portuguese: 'PT'
  }

  getSeasons(){
    this.http.get<SeasonsResponse>(this.API_URL+'seasons.json?limit=100')
      .pipe(retry(2), take(1),
        catchError(err => {
        console.error(err);
          return of(
            {
              'MRData': {
                'xmlns': 'http:\/\/ergast.com\/mrd\/1.5',
                'series': 'f1',
                'url': 'http://ergast.com/api/f1/seasons.json',
                'limit': '30',
                'offset': '0',
                'total': '75',
                'SeasonTable': {
                  'Seasons': [{
                    'season': '1950',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1950_Formula_One_season'
                  }, {
                    'season': '1951',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1951_Formula_One_season'
                  }, {
                    'season': '1952',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1952_Formula_One_season'
                  }, {
                    'season': '1953',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1953_Formula_One_season'
                  }, {
                    'season': '1954',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1954_Formula_One_season'
                  }, {
                    'season': '1955',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1955_Formula_One_season'
                  }, {
                    'season': '1956',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1956_Formula_One_season'
                  }, {
                    'season': '1957',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1957_Formula_One_season'
                  }, {
                    'season': '1958',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1958_Formula_One_season'
                  }, {
                    'season': '1959',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1959_Formula_One_season'
                  }, {
                    'season': '1960',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1960_Formula_One_season'
                  }, {
                    'season': '1961',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1961_Formula_One_season'
                  }, {
                    'season': '1962',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1962_Formula_One_season'
                  }, {
                    'season': '1963',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1963_Formula_One_season'
                  }, {
                    'season': '1964',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1964_Formula_One_season'
                  }, {
                    'season': '1965',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1965_Formula_One_season'
                  }, {
                    'season': '1966',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1966_Formula_One_season'
                  }, {
                    'season': '1967',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1967_Formula_One_season'
                  }, {
                    'season': '1968',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1968_Formula_One_season'
                  }, {
                    'season': '1969',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1969_Formula_One_season'
                  }, {
                    'season': '1970',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1970_Formula_One_season'
                  }, {
                    'season': '1971',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1971_Formula_One_season'
                  }, {
                    'season': '1972',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1972_Formula_One_season'
                  }, {
                    'season': '1973',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1973_Formula_One_season'
                  }, {
                    'season': '1974',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1974_Formula_One_season'
                  }, {
                    'season': '1975',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1975_Formula_One_season'
                  }, {
                    'season': '1976',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1976_Formula_One_season'
                  }, {
                    'season': '1977',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1977_Formula_One_season'
                  }, {
                    'season': '1978',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1978_Formula_One_season'
                  }, {
                    'season': '1979',
                    'url': 'http:\/\/en.wikipedia.org\/wiki\/1979_Formula_One_season'
                  }]
                }
              }
            } as SeasonsResponse
          )
      })
      )
      .subscribe((response) => {
        const seasons = response.MRData.SeasonTable.Seasons.map(seasonObj => seasonObj.season);
        this.seasons$.next(seasons);
      })
  }
  fetchRaces(year: string){
    this.http.get<RaceResponse>(this.API_URL+year+'.json')
      .pipe(retry(2), take(1),
          catchError(err => {
            console.error(err);
            return of({} as RaceResponse)
          })
      )
      .subscribe((response) => {
        const races = response.MRData.RaceTable.Races
        this.races$.next(races);
      })
  }

  setSelectedRace(race: Race){
    this.selectedRace = race;
  }

  fetchResults(year: string, round: string){
    this.http.get<ResultsResponse>(this.API_URL+year+'/'+round+'/results.json')
      .pipe(retry(2), take(1),
        catchError(err => {
          console.error(err);
          return of({} as ResultsResponse)
        })
      )
      .subscribe((response) => {
        this.results$.next(response);
      })
  }
}
