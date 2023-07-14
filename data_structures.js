"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortProjectsByDate = exports.SortProjectsByPriority = exports.SiteMetaData = exports.ProjectData = exports.AboutPageData = void 0;
var fs = require("fs");
var global = require("./global");
var interpreter_1 = require("./interpreter");
var markdown_1 = require("@ts-stack/markdown");
var AboutPageData = /** @class */ (function () {
    function AboutPageData(bio, photographyLink, githubLink, linkedinLink, twitterLink) {
        this.bio = bio;
        this.photographyLink = photographyLink;
        this.githubLink = githubLink;
        this.linkedinLink = linkedinLink;
        this.twitterLink = twitterLink;
    }
    return AboutPageData;
}());
exports.AboutPageData = AboutPageData;
var ProjectData = /** @class */ (function () {
    function ProjectData(display, priority, title, date, markdownPath, tags) {
        this.display = display;
        this.priority = priority;
        this.title = title;
        this.date = date;
        this.markdownPath = markdownPath;
        this.tags = tags;
        this.GetMonth();
        this.GetYear();
        this.ReadMarkdown();
        this.InterpretMarkdown();
    }
    ProjectData.prototype.GetMonth = function () {
        this.month = parseInt(this.date.slice(0, 2));
        return this.month;
    };
    ProjectData.prototype.GetYear = function () {
        this.year = parseInt(this.date.slice(2, 4));
        return this.year;
    };
    ProjectData.prototype.GetHTML = function (markdown) {
        this.html = markdown_1.Marked.parse(markdown);
        return this.html;
    };
    // we will also generate html here
    ProjectData.prototype.ReadMarkdown = function () {
        try {
            this.markdownContent = fs.readFileSync(global.PAGES_PATH + this.markdownPath, 'utf8');
            this.GetHTML(this.markdownContent);
        }
        catch (error) {
            console.error("Error Reading ".concat(global.PAGES_PATH + this.markdownPath));
        }
    };
    ProjectData.prototype.InterpretMarkdown = function () {
        var foo = new interpreter_1.Interpreter(global.PAGES_PATH + this.markdownPath);
        foo.Interpret();
        this.html = foo.html;
    };
    return ProjectData;
}());
exports.ProjectData = ProjectData;
var SiteMetaData = /** @class */ (function () {
    function SiteMetaData(projects, aboutData) {
        this.projects = projects;
        this.aboutData = aboutData;
    }
    SiteMetaData.prototype.SortProjectsByDate = function () {
        this.projects.sort(SortProjectsByDate);
    };
    SiteMetaData.prototype.SortProjectsByPriority = function () {
        this.projects.sort(SortProjectsByPriority);
    };
    return SiteMetaData;
}());
exports.SiteMetaData = SiteMetaData;
function SortProjectsByPriority(a, b) {
    //sort by year
    if (a.priority < b.priority) {
        return -1;
    }
    if (a.priority > b.priority) {
        return 1;
    }
    if (a.priority = b.priority) {
        return -1;
    }
    return 0;
}
exports.SortProjectsByPriority = SortProjectsByPriority;
function SortProjectsByDate(a, b) {
    //sort by year
    if (a.year < b.year) {
        return 1;
    }
    if (a.year > b.year) {
        return -1;
    }
    //if year is the same, use the month
    if (a.year == b.year) {
        if (a.month < b.month) {
            return 1;
        }
        if (a.month > b.month) {
            return -1;
        }
    }
    return 0;
}
exports.SortProjectsByDate = SortProjectsByDate;
