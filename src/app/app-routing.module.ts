import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChatMessagesComponent } from './chat-messages/chat-messages.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: 'home', component: PageNotFoundComponent },
  { path: 'chatmessages', component: ChatMessagesComponent },
  { path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), ReactiveFormsModule,FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
