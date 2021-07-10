"use strict";
exports.__esModule = true;
exports.ProjectSlide = exports.ProjectLists = exports.Body = void 0;
var common = require("./common_template");
function Body(projects) {
    return "\n    <body>\n        <div id=\"wrapper\">\n\n            <section id=\"header\">\n            <div id=\"header-title\">\n                <h1>Codrin-Mihail<br>Interactive Dev. / Tech Art.</h1>\n            </div>\n\n            <div id=\"header-links\">\n                <h1><a href=\"index.html\">Projects</a>  </h1>\n                <h1><a href=\"http://releases.codrinmihail.com/\">Releases</a>  </h1><br>\n                <h1><a href=\"about.html\">About</a>  </h1>\n                <h1><a href=\"http://www.miha-co.ca/lumograph\">Photography</a>  </h1>\n            </div>\n            </section>\n\n            <!--divider-->\n            <hr class=\"line\">\n\n            " + ProjectLists(projects) + "\n            " + common.Footer() + "\n        </div>\n    </body>\n    ";
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
function ProjectSlide(project) {
    return "\n    <div class=\"project-entry\">\n        <a href=\"" + project.name + ".html\"><img src=\"media/" + project.name + "/thumbnail.jpg\"></a>\n        <h1><a href=\"" + project.name + ".html\">" + project.month + "/" + project.year + "</a></h1><p><a href=\"" + project.name + ".html\"> " + project.name + "</a></p>\n    </div>\n\n    <!--divider-->\n    <hr class=\"line\">\n    ";
}
exports.ProjectSlide = ProjectSlide;
