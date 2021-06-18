import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PlexMovieResolver } from './resolvers/plex-movie.resolver';
import { PlexMoviesResolver } from './resolvers/plex-movies.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./pages/movies/movies.module').then( m => m.MoviesPageModule),
    resolve: {
      plexResponse: PlexMoviesResolver
    }
  },
  {
    path: 'movie/:movieKey',
    loadChildren: () => import('./pages/movie/movie.module').then( m => m.MoviePageModule),
    resolve: {
      plexMovie: PlexMovieResolver
    }
  },
  {
    path: 'player/:mediaId/:partId/:file',
    loadChildren: () => import('./pages/player/player.module').then( m => m.PlayerPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
