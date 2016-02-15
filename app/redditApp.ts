/**
 * Created by Ruan on 2/9/16.
 */

import { bootstrap } from "angular2/platform/browser";
import { Component } from "angular2/core";
//import { RedditArticle } from "./redditArticle";
//import { RedditService } from "./service";

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

class RedditArticle {

    article: Article;

    constructor() {
        this.article = new Article('angular2', 'google.com', 0);
    }

    voteUp() {
        this.article.voteUp();
    }

    voteDown() {
        this.article.voteDown();
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
    voteUp(): boolean {
        this.votes++;
        return false;
    }

    voteDown(): boolean {
        this.votes--;
        return false;
    }

}

@Component({
    selector: 'reddit',
    directives: [RedditArticle],
    template: `
        <h2 class='text-center'>Reddit App</h2>
        <form class="form-horizontal">
          <div class="form-group">
            <label for="inputEmail3" class="col-sm-2 control-label">Title</label>
            <div class="col-sm-10">
              <input class="form-control" id="inputEmail3" name="title" #newTitle>
            </div>
          </div>
          <div class="form-group">
            <label for="inputPassword3" class="col-sm-2 control-label">Link</label>
            <div class="col-sm-10">
              <input class="form-control" id="inputPassword3" name="link" #newLink>
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10 text-center">
              <button class="btn-info" type="submit" class="btn btn-default" (click)="addArticle(newTitle, newLink)">Submit Link</button>
            </div>
          </div>
        </form>
        <reddit-article></reddit-article>
    `
})

class RedditApp {
    constructor(){

    }

    addArticle(title: HTMLInputElement, link: HTMLInputElement) {
        //console.log(`title: ${title.value} and link: ${link.value}`);
        console.log("title: " + `${title.value}`);
    }

}

bootstrap(RedditApp);

//bootstrap(RedditApp, [RedditService]);

