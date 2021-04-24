import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiserver = "http://localhost:3000/";

  constructor(private httpClient: HttpClient) { }

  /*
   * We can create POST, PUT, and DELETE functionality by replicating
   * sendGetRequest() (e.g., sendPostRequest()) and changing the method
   * used with httpClient.
   *
   * See: https://angular.io/guide/http#sending-data-to-a-server
   */
  public sendGetRequest(endpoint: string) {
    let finaldest = "http://localhost:3000" + endpoint
    return this.httpClient.get(finaldest);
  }
}
