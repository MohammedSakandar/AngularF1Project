import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

interface WikipediaApiResponse {
  query: {
    pages: {
      [key: string]: {
        thumbnail?: {
          source: string;
        };
      };
    };
  };
}
@Injectable({
  providedIn: 'root'
})
export class WikiServiceService {
  private imageUrlSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  public imageUrl$: Observable<string | null> = this.imageUrlSubject.asObservable();

  constructor(private http: HttpClient) {}

  searchImage(searchTerm: string): void {
    this.http.get<WikipediaApiResponse>(`https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&titles=${searchTerm}&origin=*`)
      .pipe(
        map(data => {
          const pages = Object.values(data.query.pages);
          const page = pages[0];
          return page && page.thumbnail ? page.thumbnail.source : null;
        })
      )
      .subscribe(imageUrl => this.imageUrlSubject.next(imageUrl));
  }
}
