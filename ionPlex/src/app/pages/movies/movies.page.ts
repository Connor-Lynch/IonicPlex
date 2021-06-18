import { PlexResonse } from './../../interfaces/plex-response.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlexMovieMedia } from 'src/app/interfaces/plex-movie-media.interface';
import { PlexMovie } from 'src/app/interfaces/plex-movie.interface';
import { PlexUrlBuilder } from 'src/app/services/plex-url-builder.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  private plexResponse: PlexResonse;
  public plexMovies: PlexMovie[];

  constructor(
    public route: ActivatedRoute,
    private urlBuilder: PlexUrlBuilder
  ) {
    this.plexResponse = this.route.snapshot.data.plexResponse;
    this.plexMovies = this.plexResponse.MediaContainer.Metadata;
    console.log(this.plexResponse)
  }

  ngOnInit() {
  }

  public getMovieKey(fullKey: string) {
    var pieces = fullKey.split('/');
    return pieces[pieces.length - 1];
  }

  public getPoster(movie: PlexMovie): string {
    const baseUrl = this.urlBuilder.baseUrl;
    const token = this.urlBuilder.getFormattedToken();

    return `${ baseUrl }${ movie.thumb }/${ token }`;
  }
}
