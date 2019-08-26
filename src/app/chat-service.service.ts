import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IChatMessageModel from './share/ichat-message-model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {
  private _url = 'http://localhost:8080/api/chatmessages';

  constructor(private http: HttpClient, private router: Router) { }

  getChatMessages(): Observable<IChatMessageModel[]> {
    return this.http.get<IChatMessageModel[]>(this._url);
  };

  postChatMessage(formName: String, formMessage: String) {
    const obj = {
      name: formName,
      message: formMessage
    };
    console.log(obj);
    this.http.post(this._url, obj).subscribe(res => {
      this.router.navigate(['/chatmessages'])
    });
  };
}
