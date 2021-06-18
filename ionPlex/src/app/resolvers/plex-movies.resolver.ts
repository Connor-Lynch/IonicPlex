import { PlexResonse } from '../interfaces/plex-response.interface';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { PlexService } from "../services/plex-api.service";

@Injectable({
  providedIn: 'root'
})
export class PlexMoviesResolver implements Resolve<any> {
  constructor(
    private plexService: PlexService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<PlexResonse | void> {
    return  this.plexService.getAllMovies()
      .catch(err => {
        console.log(err);
      });
  }
}
