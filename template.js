"use strict";
exports.__esModule = true;
exports.AboutHTML = exports.ProjectHTML = exports.IndexHTML = void 0;
//TEMPLATES
var common = require("./template_common");
var index_template = require("./template_index");
var project_template = require("./template_project");
var about_template = require("./about_template");
//CONSTANTS
var META = "";
var TITLE = "Codrin-Mihail";
var HEADER = "";
var BODY = "";
var FOOTER = "";
var MEDIA = "";
function IndexHTML(projects) {
    return "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    " + common.Header() + "\n    " + index_template.Body(projects) + "\n    </html>\n    ";
}
exports.IndexHTML = IndexHTML;
function ProjectHTML(project) {
    return "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    " + common.Header() + "\n    " + project_template.Body(project) + "\n    </html>\n    ";
}
exports.ProjectHTML = ProjectHTML;
function AboutHTML() {
    return "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    " + common.Header() + "\n    " + about_template.Body() + "\n    </html>\n    ";
}
exports.AboutHTML = AboutHTML;
