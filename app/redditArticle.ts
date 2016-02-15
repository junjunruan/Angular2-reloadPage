/**
 * Created by Ruan on 2/9/16.
 */

import { bootstrap } from "angular2/platform/browser";
import { Component } from "angular2/core";

@Component({
    selector: 'reddit-article',
    template: `
        <div class="row">
            <div class="col-md-3"></div>
                <div>Points: {{article.votes}}</div>
            <div class="col-md-9"></div>
                <!--<div class="row">-->
                    Title: {{article.title}}
                    Link: {{article.link}}
                    <button (click)="voteUp()">upvote</button>
                    <button (click)="voteDown()">downvote</button>
                <!--</div>-->
        </div>
    `
})

export class RedditArticle {

    article: Article;

    constructor() {
        this.article = new Article('angular2', 'google.com', 0);
    }

    voteUp() {
        this.article.votes++;
    }

    voteDown() {
        this.article.votes--;
    }
}

class Article {
    title: string;
    link: string;
    votes: number;

    constructor(title: string, link: string, votes: number) {
        this.title = title;
        this.link = link;
        this.votes = votes;
    }

}