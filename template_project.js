"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Body = exports.ProjectHTML = void 0;
var common = require("./template_common");
function ProjectHTML(about, project) {
    return "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    ".concat(common.Header(), "\n    ").concat(Body(about, project), "\n    </html>\n    ");
}
exports.ProjectHTML = ProjectHTML;
function Body(about, project) {
    return "\n    <body>\n    <div id=\"wrapper\">\n\n        <section id=\"project-header\">\n            <div id=\"header-title\">\n                <h1>".concat(project.title, "</h1>\n            </div>\n\n            <div id=\"header-links\">\n                <h1><a href=\"index.html\">Projects</a></h1>\n            </div>\n        </section>\n\n        <hr class=\"line\">\n    \n        <section id=\"project-details\">\n        ").concat(project.html, "\n        </section>\n        \n        <!--divider-->\n        <hr class=\"line\">\n        \n        ").concat(common.Footer(about), "\n        \n        </div>\n        </body>\n        ");
}
exports.Body = Body;
// project html
