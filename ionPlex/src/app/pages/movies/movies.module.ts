import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviesPage } from './movies.page';
import { RouterModule, Routes } from '@angular/router';
import { MainToolbarComponent } from 'src/app/components/main-toolbar/main-toolbar.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MoviesPage,
    MainToolbarComponent
  ]
})
export class MoviesPageModule {}
