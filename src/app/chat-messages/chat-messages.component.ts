import { Component, OnInit, Input } from '@angular/core';
import { ChatServiceService } from '../chat-service.service';
import IChatMessageModel from '../share/ichat-message-model';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';


@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.css']
})
export class ChatMessagesComponent implements OnInit {
  messages:IChatMessageModel[];
  angForm: FormGroup;

  constructor(private messageService$: ChatServiceService, private fb: FormBuilder ) { }

  ngOnInit() {
    this.messageService$.getChatMessages()
      .subscribe(response => { this.messages = response.reverse();
      });
      this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  addMessage(name: String, message: String) {
    console.log('name as: ' + name);
    console.log('message as: ' + message);
    this.angForm.reset();
    this.messageService$.postChatMessage(name, message);
    this.ngOnInit();
  }

}
