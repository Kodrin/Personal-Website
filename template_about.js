"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Body = void 0;
var common = require("./template_common");
function Body() {
    return "\n    <body>\n    <div id=\"wrapper\">\n        <section id=\"header\">\n            <div id=\"header-title\">\n                <h1>Codrin-Mihail<br>Interactive Dev. / Tech Art.</h1>\n            </div>\n\n            <div id=\"header-links\">\n                <h1><a href=\"index.html\">Projects</a>  </h1>\n                <h1><a href=\"about.html\">About</a>  </h1>\n                <h1><a href=\"https://lumograph.codrinmihail.com/\">Photography</a>  </h1>\n            </div>\n        </section>\n\n        <!--divider-->\n        <hr class=\"line\">\n\n        <section id=\"bio\">\n            <p>\n\n            Welcome! I'm a tech artist with expertise in AAA game development. I specialize in building artist tools and procedural systems in Unreal Engine and Unity. With a solid grasp of Houdini and pipeline establishment, I streamline workflows for optimal efficiency. My understanding of graphics programming and shaders enhances visual quality. Having worked in the interactive media industry, I bring a unique perspective. Proficient in C# and C++, I bridge art and technology, delivering exceptional results. Let's collaborate to bring your creative vision to life! Contact me to discuss your next project.\n            </p>\n            \n        </section>\n\n        <!--divider-->\n        <hr class=\"line\">\n\n        ".concat(common.Footer(), "\n    </div>\n    </body>\n    ");
}
exports.Body = Body;
