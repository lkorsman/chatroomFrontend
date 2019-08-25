import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IChatMessageModel from './share/ichat-message-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {
  private _url = 'http://localhost:8080/api/chatmessages';

  constructor(private http: HttpClient) { }

  getChatMessages(): Observable<IChatMessageModel[]> {
    return this.http.get<IChatMessageModel[]>(this._url);
  }
}
