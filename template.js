"use strict";
exports.__esModule = true;
exports.AboutHTML = exports.ProjectHTML = exports.IndexHTML = void 0;
//TEMPLATES
var common = require("./common_template");
var index = require("./index_template");
var project = require("./project_template");
var about = require("./about_template");
//CONSTANTS
var META = "";
var TITLE = "Codrin-Mihail";
var HEADER = "";
var BODY = "";
var FOOTER = "";
var MEDIA = "";
function IndexHTML(projects) {
    return "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    " + common.Header() + "\n    " + index.Body(projects) + "\n    </html>\n    ";
}
exports.IndexHTML = IndexHTML;
function ProjectHTML(month, year, projectName, projectDetails) {
    return "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    " + common.Header() + "\n    " + project.Body(month, year, projectName, projectDetails) + "\n    </html>\n    ";
}
exports.ProjectHTML = ProjectHTML;
function AboutHTML() {
    return "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    " + common.Header() + "\n    " + about.Body() + "\n    </html>\n    ";
}
exports.AboutHTML = AboutHTML;
