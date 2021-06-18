import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { PlexService } from "../services/plex-api.service";
import { PlexMovie } from '../interfaces/plex-movie.interface';

@Injectable({
  providedIn: 'root'
})
export class PlexMovieResolver implements Resolve<any> {
  constructor(
    private plexService: PlexService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<PlexMovie | void> {
    const movieKey = route.paramMap.get('movieKey');

    return this.plexService.getMovie(movieKey)
      .then(plexResponse => {
        return plexResponse.MediaContainer.Metadata[0];
      })
      .catch(err => {
        console.log(err);
      });
  }
}
