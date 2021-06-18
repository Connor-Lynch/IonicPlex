import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class PlexUrlBuilder {

  public baseUrl: string;
  private token: string;

  constructor(
  ) {
    this.baseUrl = "";
    this.token = ""
  }

  public getFormattedToken(): string {
    return "?X-Plex-Token=" + this.token;
  }
}
