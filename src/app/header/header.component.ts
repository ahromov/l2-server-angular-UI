import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MessagesService } from '../messages.service';
import { RestClientService } from '../rest-client.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() language: string = "ru";
  messages: any;

  registeredServersUrl: string = 'ls/getServers';
  registeredServers: Object[];

  serversStatusUrl: string = 'gs/get/status';
  serverStatus: any;
  isStatusOn: boolean;

  constructor(public serviceMassages: MessagesService, public serviceRestClient: RestClientService) {
  }
  
  ngOnInit(): void {
    this.setMessages();
    this.getRegisteredServers();
    this.getServersStatus();
    this.setIsStatusOn();
  }

  setMessages(): void {
    this.messages = this.serviceMassages.getMessages(this.language);
  }

  getRegisteredServers(): void {
    this.serviceRestClient.getAll(this.registeredServersUrl).subscribe(registeredServers => this.registeredServers = registeredServers);
  }

  getServersStatus(): void {
    this.serviceRestClient.get(this.serversStatusUrl).subscribe(serverStatus => this.serverStatus = serverStatus);
  }

  setIsStatusOn(): void {
    if (this.serverStatus.status === 'ON')
      this.isStatusOn = true;
  }

}
