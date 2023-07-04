"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutHTML = exports.ProjectHTML = exports.IndexHTML = void 0;
//TEMPLATES
var common = require("./template_common");
var index_template = require("./template_index");
var project_template = require("./template_project");
var about_template = require("./template_about");
//CONSTANTS
var META = "";
var TITLE = "Codrin-Mihail";
var HEADER = "";
var BODY = "";
var FOOTER = "";
var MEDIA = "";
function IndexHTML(about, projects) {
    return "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    ".concat(common.Header(), "\n    ").concat(index_template.Body(about, projects), "\n    </html>\n    ");
}
exports.IndexHTML = IndexHTML;
function ProjectHTML(about, project) {
    return "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    ".concat(common.Header(), "\n    ").concat(project_template.Body(about, project), "\n    </html>\n    ");
}
exports.ProjectHTML = ProjectHTML;
function AboutHTML(about) {
    return "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    ".concat(common.Header(), "\n    ").concat(about_template.Body(about), "\n    </html>\n    ");
}
exports.AboutHTML = AboutHTML;
