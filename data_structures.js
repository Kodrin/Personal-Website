"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectStruct = exports.SiteMetaData = exports.ProjectData = exports.AboutPageData = void 0;
var markdown_1 = require("@ts-stack/markdown");
var AboutPageData = /** @class */ (function () {
    function AboutPageData() {
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
    }
    return ProjectData;
}());
exports.ProjectData = ProjectData;
var SiteMetaData = /** @class */ (function () {
    function SiteMetaData() {
    }
    return SiteMetaData;
}());
exports.SiteMetaData = SiteMetaData;
var ProjectStruct = /** @class */ (function () {
    function ProjectStruct() {
    }
    ProjectStruct.prototype.GetMonth = function () {
        return 0;
    };
    ProjectStruct.prototype.GetYear = function () {
        return 0;
    };
    ProjectStruct.prototype.GetHTML = function (markdown) {
        return markdown_1.Marked.parse(markdown);
    };
    return ProjectStruct;
}());
exports.ProjectStruct = ProjectStruct;
