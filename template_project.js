"use strict";
exports.__esModule = true;
exports.Body = exports.ProjectHTML = void 0;
var common = require("./template_common");
function ProjectHTML(project) {
    return "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    " + common.Header() + "\n    " + Body(project) + "\n    </html>\n    ";
}
exports.ProjectHTML = ProjectHTML;
function Body(project) {
    return "\n    <body>\n    <div id=\"wrapper\">\n\n        <section id=\"project-header\">\n            <div id=\"header-title\">\n                <h1>" + project.month + "/" + project.year + " " + project.name + "</h1>\n            </div>\n\n            <div id=\"header-links\">\n                <h1><a href=\"index.html\">Projects</a></h1>\n            </div>\n        </section>\n\n        <hr class=\"line\">\n    \n        <section id=\"project-details\">\n        " + project.htmlContent + "\n        </section>\n        \n        <!--divider-->\n        <hr class=\"line\">\n\n        " + common.Footer() + "\n\n    </div>\n    </body>\n    ";
}
exports.Body = Body;
