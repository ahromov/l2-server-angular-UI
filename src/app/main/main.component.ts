import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MessagesService } from '../messages.service';
import { RestClientService } from '../rest-client.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() language: string = "ru";
  @Input() pageId: number = 0;

  messages: any;
  newsPath: string = "news/get/pages/" + this.pageId;
  newses: any[];

  isCheckedUa: boolean = this.language === 'ua' ? true : false;
  isCheckedRu: boolean = this.language === 'ru' ? true : false;
  isCheckedEn: boolean = this.language === 'en' ? true : false;

  videosIds: string[] = ['nz7FbTBmZ_M', 'kcD1b1rldK0', '1a52kEtLjZs', '9-jbTggvUlQ'];
  playIndex = Math.floor(Math.random() * this.videosIds.length);

  topicsPath: string = "forums/get/topics/last5";
  topics: any[];
  countListItem: number = 0;
  urlForum: string;

  constructor(public serviceMassages: MessagesService, public restClientService: RestClientService) {

  }

  ngOnInit(): void {
    this.getMessages();
    this.getNews();
    this.getUrlForum();
    this.getTopics();
  }

  getMessages(): void {
    this.messages = this.serviceMassages.getMessages(this.language);
  }

  getNews(): void {
    this.restClientService.getAll(this.newsPath).subscribe(newses => this.newses = newses);
  }

  getDate(newsDate) {
    return new Date(newsDate);
  }

  getTopics(): void {
    this.restClientService.getAll(this.topicsPath).subscribe(topics => this.topics = topics);
  }

  getUrlForum(): void {
    this.urlForum = this.restClientService.getForumUrl();
  }

  getForumIcon(topic): string {
    if (topic.icon !== null)
      return this.urlForum + "images/icons/" + topic.url;
    else return '';
  }

}
