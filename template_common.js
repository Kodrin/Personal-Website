"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = exports.Header = void 0;
function Header() {
    return "\n    <head>\n        <meta charset=\"UTF-8\">\n        <title>Codrin-Mihail</title>\n\n        <!--    css stylesheets-->\n        <link rel=\"stylesheet\" type=\"text/css\" href= \"css/fonts.css\" >\n        <link rel=\"stylesheet\" type=\"text/css\" href= \"css/master.css\" >\n        <link rel=\"stylesheet\" type=\"text/css\" href= \"css/mediaqueries.css\" >\n    </head>\n    ";
}
exports.Header = Header;
function Footer(about) {
    return "\n    <section id=\"footer\">\n        <div id=\"footer-links\">\n            <h1><a href=\"".concat(about.githubLink, "\">GitHub</a>  </h1>\n            <h1><a href=\"").concat(about.linkedinLink, "\">LinkedIn</a></h1>\n            <h1><a href=\"").concat(about.twitterLink, "\">Twitter</a></h1>\n        </div>\n    </section>\n    ");
}
exports.Footer = Footer;
