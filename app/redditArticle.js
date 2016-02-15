/**
 * Created by Ruan on 2/9/16.
 */
System.register(["angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var RedditArticle, Article;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            RedditArticle = (function () {
                function RedditArticle() {
                    this.article = new Article('angular2', 'google.com', 0);
                }
                RedditArticle.prototype.voteUp = function () {
                    this.article.votes++;
                };
                RedditArticle.prototype.voteDown = function () {
                    this.article.votes--;
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
            exports_1("RedditArticle", RedditArticle);
            Article = (function () {
                function Article(title, link, votes) {
                    this.title = title;
                    this.link = link;
                    this.votes = votes;
                }
                return Article;
            })();
        }
    }
});
//# sourceMappingURL=redditArticle.js.map