import { Component } from '@angular/core';
import { PlexService } from '../services/plex-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  myText = 'My dummy text';

  constructor(
    private plexService: PlexService
  ) {
  }

  public getLibrary() {
    this.plexService.getLibrary();
  }

  public getMovies() {
    this.plexService.getAllMovies();
  }

}
