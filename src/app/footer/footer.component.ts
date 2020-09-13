import { Component, Input, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() language: string = "ru";
  messages: any;
  developerName: string = "La2Dev";

  constructor(public serviceMassages: MessagesService) { }

  ngOnInit(): void {
    this.getMessages();
  }

  getMessages(): void {
    this.messages = this.serviceMassages.getMessages(this.language);
  }

}
