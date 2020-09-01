import { NewsService } from './../news.service';
import { News } from './../models/news';
import { NavController } from '@ionic/angular';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { from } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit, OnDestroy{
  newses: News[];
  sub: Subscription;


  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.sub =this.newsService.getNews().subscribe((newses) => {

      this.newses = newses;
    }
    );
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

