"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectSlide = exports.ProjectTagSlide = exports.ProjectTags = exports.ProjectLists = exports.Body = void 0;
var common = require("./template_common");
function Body(projects) {
    return "\n    <body>\n        <div id=\"wrapper\">\n\n            <section id=\"header\">\n            <div id=\"header-title\">\n                <h1>Codrin-Mihail<br>Interactive Dev. / Tech Art.</h1>\n            </div>\n\n            <div id=\"header-links\">\n                <h1><a href=\"index.html\">Projects</a>  </h1>\n                <h1><a href=\"about.html\">About</a>  </h1>\n                <h1><a href=\"https://lumograph.codrinmihail.com/\">Photography</a>  </h1>\n            </div>\n            </section>\n\n            <!--divider-->\n            <hr class=\"line\">\n\n            ".concat(ProjectLists(projects), "\n            ").concat(common.Footer(), "\n        </div>\n    </body>\n    ");
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
function ProjectTags(project) {
    var body = "";
    var tags = project.tags;
    for (var i = 0; i < tags.length; i++) {
        body += ProjectTagSlide(tags[i]);
    }
    return body;
}
exports.ProjectTags = ProjectTags;
function ProjectTagSlide(tag) {
    return "\n    <div class=\"project-tag\">\n        <p>".concat(tag, "</p>\n    </div>\n\n    <!--divider-->\n    ");
}
exports.ProjectTagSlide = ProjectTagSlide;
function ProjectSlide(project) {
    return "\n    <div class=\"project-entry\">\n        <a href=\"".concat(project.name, ".html\"><img src=\"media/").concat(project.name, "/thumbnail.jpg\"></a>\n        <div class=\"project-info-tab\">\n            <div class=\"project-info\">\n                <div class=\"project-name\">\n                    <h1><a href=\"").concat(project.name, ".html\">").concat(project.month, "/").concat(project.year, "</a></h1><p><a href=\"").concat(project.name, ".html\"> ").concat(project.name, "</a></p>\n                </div>\n\n                <div class=\"project-tags\">\n                    ").concat(ProjectTags(project), "\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!--divider-->\n    <hr class=\"line\">\n    ");
}
exports.ProjectSlide = ProjectSlide;
