"use strict";
exports.__esModule = true;
exports.Body = void 0;
var common = require("./template_common");
function Body() {
    return "\n    <body>\n    <div id=\"wrapper\">\n        <section id=\"header\">\n            <div id=\"header-title\">\n                <h1>Codrin-Mihail<br>Interactive Dev. / Tech Art.</h1>\n            </div>\n\n            <div id=\"header-links\">\n                <h1><a href=\"index.html\">Projects</a>  </h1>\n                <h1><a href=\"about.html\">About</a>  </h1>\n                <h1><a href=\"https://lumograph.codrinmihail.com/\">Photography</a>  </h1>\n            </div>\n        </section>\n\n        <!--divider-->\n        <hr class=\"line\">\n\n        <section id=\"bio\">\n            <p>\n            </p>\n        </section>\n\n        <!--divider-->\n        <hr class=\"line\">\n\n        ".concat(common.Footer(), "\n    </div>\n    </body>\n    ");
}
exports.Body = Body;
