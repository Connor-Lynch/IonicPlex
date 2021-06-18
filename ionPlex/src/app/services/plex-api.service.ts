import { PlexResonse } from './../interfaces/plex-response.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlexUrlBuilder } from './plex-url-builder.service';

@Injectable({
  providedIn: 'root'
})
export class PlexService {

  constructor(
    private http: HttpClient,
    private urlBuilder: PlexUrlBuilder
  ) {
  }

  public async getLibrary() {
    await this.http.get(this.getFullApiRequestUrl(""))
      .toPromise()
      .then(results => {
        var object = results as PlexResonse;
        console.log(object);
      })
      .catch(err => {
        console.log(err)
      });
  }

  public async getAllMovies(): Promise<PlexResonse> {
    return await this.http.get(this.getFullApiRequestUrl("/library/sections/4/all"))
      .toPromise()
      .then(results => {
        return results as PlexResonse;
      })
      .catch(err => {
        console.log(err);
        return null;
      });
  }

  public async getMovie(movieKey: string): Promise<PlexResonse> {
    return await this.http.get(this.getFullApiRequestUrl("/library/metadata/" + movieKey))
      .toPromise()
      .then(results => {
        console.log(results)
        return results as PlexResonse;
      })
      .catch(err => {
        console.log(err);
        return null;
      });
  }

  private getFullApiRequestUrl(query: string): string {
    return this.urlBuilder.baseUrl + query + this.urlBuilder.getFormattedToken();
  }
}
