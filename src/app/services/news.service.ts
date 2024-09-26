import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environmentVariable} from "../environments/environment";
import {ArticleResponse} from "../interfaces/interfaces";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient: HttpClient) { }

  getTopNews(): Observable<ArticleResponse> {
    return this.httpClient.get<ArticleResponse>(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${environmentVariable.apiKey}`)
  }

  getTopNewsFromCategory(category: string): Observable<ArticleResponse> {
    return this.httpClient.get<ArticleResponse>(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${environmentVariable.apiKey}`)
  }
}
