import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../interfaces/interfaces";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent  implements OnInit {
  @Input() article: Article = {} as Article;
  @Input() indexArticle: number = 1;

  constructor() { }

  ngOnInit() {}

}
