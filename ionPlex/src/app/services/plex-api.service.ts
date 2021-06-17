import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlexService {

  constructor(
    private http: HttpClient
  ) {

  }

  async getAllMovies() {
    await this.http.get("https://192.168.254.70:32400/library/sections/4/all?X-Plex-Token=6V3uVEEHjS_vrowtzgbK")
      .toPromise()
      .then(results => {
        console.log(results);
      })
      .catch(err => {
        console.log(err)
      });
  }
}
