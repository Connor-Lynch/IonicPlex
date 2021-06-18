import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PlexUrlBuilder } from 'src/app/services/plex-url-builder.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.page.html',
  styleUrls: ['./player.page.scss'],
})
export class PlayerPage implements OnInit {
  public filePath: string;
  public fileType: string;

  constructor(
    public route: ActivatedRoute,
    private urlBuilder: PlexUrlBuilder
  ) {
    const snapshot = route.snapshot;
    const baseUrl = this.urlBuilder.baseUrl;
    const mediaId = snapshot.paramMap.get('mediaId');
    const partId = snapshot.paramMap.get('partId');
    this.fileType = snapshot.paramMap.get('file');

    this.filePath = `${ baseUrl }/library/parts/${ mediaId }/${ partId }/file.${ this.fileType }/${ this.urlBuilder.getFormattedToken() }`;
    console.log(this.filePath)
  }

  ngOnInit() {
  }

}
