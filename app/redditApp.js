/**
 * Created by Ruan on 2/9/16.
 */
System.register(["angular2/platform/browser", "angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1;
    var RedditArticle, Article, RedditApp;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //import { RedditArticle } from "./redditArticle";
            //import { RedditService } from "./service";
            RedditArticle = (function () {
                function RedditArticle() {
                    this.article = new Article('angular2', 'google.com', 0);
                }
                RedditArticle.prototype.voteUp = function () {
                    this.article.voteUp();
                };
                RedditArticle.prototype.voteDown = function () {
                    this.article.voteDown();
                };
                RedditArticle = __decorate([
                    core_1.Component({
                        selector: 'reddit-article',
                        template: "\n        <div class=\"row\">\n            <div class=\"col-md-3\"></div>\n                <div>Points: {{article.votes}}</div>\n            <div class=\"col-md-9\"></div>\n                <!--<div class=\"row\">-->\n                    Title: {{article.title}}\n                    Link: {{article.link}}\n                    <button (click)=\"voteUp()\">upvote</button>\n                    <button (click)=\"voteDown()\">downvote</button>\n                <!--</div>-->\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], RedditArticle);
                return RedditArticle;
            })();
            Article = (function () {
                function Article(title, link, votes) {
                    this.title = title;
                    this.link = link;
                    this.votes = votes;
                }
                Article.prototype.voteUp = function () {
                    this.votes++;
                    return false;
                };
                Article.prototype.voteDown = function () {
                    this.votes--;
                    return false;
                };
                return Article;
            })();
            RedditApp = (function () {
                function RedditApp() {
                }
                RedditApp.prototype.addArticle = function (title, link) {
                    //console.log(`title: ${title.value} and link: ${link.value}`);
                    console.log("title: " + ("" + title.value));
                };
                RedditApp = __decorate([
                    core_1.Component({
                        selector: 'reddit',
                        directives: [RedditArticle],
                        template: "\n        <h2 class='text-center'>Reddit App</h2>\n        <form class=\"form-horizontal\">\n          <div class=\"form-group\">\n            <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Title</label>\n            <div class=\"col-sm-10\">\n              <input class=\"form-control\" id=\"inputEmail3\" name=\"title\" #newTitle>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"inputPassword3\" class=\"col-sm-2 control-label\">Link</label>\n            <div class=\"col-sm-10\">\n              <input class=\"form-control\" id=\"inputPassword3\" name=\"link\" #newLink>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-sm-offset-2 col-sm-10 text-center\">\n              <button class=\"btn-info\" type=\"submit\" class=\"btn btn-default\" (click)=\"addArticle(newTitle, newLink)\">Submit Link</button>\n            </div>\n          </div>\n        </form>\n        <reddit-article></reddit-article>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], RedditApp);
                return RedditApp;
            })();
            browser_1.bootstrap(RedditApp);
        }
    }
});
//bootstrap(RedditApp, [RedditService]);
//# sourceMappingURL=redditApp.js.map