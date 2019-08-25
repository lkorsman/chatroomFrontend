import { Component, OnInit } from '@angular/core';
import IChatMessageModel from '../share/ichat-message-model';
import { Router } from '@angular/router';
import { ChatServiceService } from '../chat-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  chats:IChatMessageModel[];

  constructor(private service$: ChatServiceService, private router: Router) {
  }

  ngOnInit() {
    this.service$.getChatMessages().subscribe(response => { this.chats = response;
    });
  }

}
