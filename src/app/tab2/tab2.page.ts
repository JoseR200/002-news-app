import {Component, OnInit} from '@angular/core';
import {NewsService} from "../services/news.service";
import {Article} from "../interfaces/interfaces";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  public categories: string[] = ["business", "entertainment", "general", "health", "science", "sports", "technology"];
  public categorySelected: string = "general";
  public articles: Article[];

  constructor(private newsService: NewsService) {
    this.articles = [];
  }

  segmentChanged(category: CustomEvent) {
    this.categorySelected = category.detail.value;
    this.newsService.getTopNewsFromCategory(this.categorySelected).subscribe(response => {
      this.articles = response.articles;
    });
  }

  ngOnInit(): void {
    this.newsService.getTopNewsFromCategory(this.categorySelected).subscribe(response => {
      this.articles = response.articles;
    });
  }
}
