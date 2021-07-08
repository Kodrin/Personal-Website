"use strict";
exports.__esModule = true;
exports.ProjectSlide = exports.ProjectLists = exports.Body = void 0;
var common = require("./common_template");
function Body(projects) {
    return "\n    <body>\n        <div id=\"wrapper\">\n            " + ProjectLists(projects) + "\n            " + common.Footer() + "\n        </div>\n    </body>\n    ";
}
exports.Body = Body;
function ProjectLists(projects) {
    var body = "";
    for (var i = 0; i < projects.length; i++) {
        body += ProjectSlide(projects[i]);
    }
    return body;
}
exports.ProjectLists = ProjectLists;
function ProjectSlide(filename) {
    return "\n    <div class=\"project-entry\">\n        <a href=\"" + filename + ".html\"><img src=\"media/" + filename + "/1.jpg\"></a>\n        <h1><a href=\"" + filename + ".html\">01/20</a></h1><p><a href=\"" + filename + ".html\"> " + filename + "</a></p>\n    </div>\n\n    <!--divider-->\n    <hr class=\"line\">\n    ";
}
exports.ProjectSlide = ProjectSlide;
