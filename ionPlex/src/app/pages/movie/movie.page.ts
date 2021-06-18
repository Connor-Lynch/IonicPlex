import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlexMovieMedia } from 'src/app/interfaces/plex-movie-media.interface';
import { PlexMovie } from 'src/app/interfaces/plex-movie.interface';
import { PlexUrlBuilder } from 'src/app/services/plex-url-builder.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {
  public movie: PlexMovie;

  constructor(
    public route: ActivatedRoute,
    private urlBuilder: PlexUrlBuilder
  ) {
    this.movie = this.route.snapshot.data.plexMovie;
    console.log(this.movie)
  }

  ngOnInit() {
  }

  public getUrl() {
    const media = this.movie.Media[0];
    const mediaId = this.getMediaId(media);
    const partId = this.getPartId(media);

    return `/player/${ mediaId }/${ partId }/${ media.Part[0].container }`;
  }

  private getMediaId(media: PlexMovieMedia): string {
    const pieces = this.movie.Media[0].Part[0].key.split('/');
    return pieces[3];
  }

  private getPartId(media: PlexMovieMedia): string {
    const pieces = this.movie.Media[0].Part[0].key.split('/');
    return pieces[4];
  }

  public getPoster(movie: PlexMovie): string {
    const baseUrl = this.urlBuilder.baseUrl;
    const token = this.urlBuilder.getFormattedToken();

    return `${ baseUrl }${ movie.thumb }/${ token }`;
  }

  public getArt(movie: PlexMovie): string {
    const baseUrl = this.urlBuilder.baseUrl;
    const token = this.urlBuilder.getFormattedToken();

    return `${ baseUrl }${ movie.art }/${ token }`;
  }
}
