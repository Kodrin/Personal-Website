"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interpreter = exports.Glyph = exports.ParsingTable = void 0;
var fs = require("fs");
exports.ParsingTable = {
    'H': ["<h1>", "</h1>"],
    'T': ["<h3>", "</h3>"],
    'P': ["<p>", "</p>"],
    'I': ["<p><img src=\"", "\"></p>"],
    'V': ["<div class=\"videoWrapper\"><iframe src=\"", "\" autoplay=\"0\" frameborder=\"0\" allowfullscreen></iframe></div>"],
    'M': ["<div class=\"videoWrapper\"><iframe src=\"", "\" autoplay=\"0\" frameborder=\"0\" allowfullscreen></iframe></div>"],
    '1': ["<div class=\"one-third\"><p>", "</p></div>"],
    '2': ["<div class=\"two-third\"><p>", "</p></div>"],
    '3': ["<div class=\"three-third\"><p>", "</p></div>"],
    'L': ["<hr class=\"line\">", ""]
};
var Glyph = /** @class */ (function () {
    function Glyph(identifier, content) {
        this.identifier = identifier;
        this.content = content;
    }
    return Glyph;
}());
exports.Glyph = Glyph;
var Interpreter = /** @class */ (function () {
    function Interpreter(filePath) {
        this.glyphs = [];
        this.searchingStart = true;
        this.filePath = filePath;
        this.ReadFile();
    }
    Interpreter.prototype.ReadFile = function () {
        this.fileContent = fs.readFileSync(this.filePath, 'utf-8');
    };
    Interpreter.prototype.Interpret = function () {
        var len = this.fileContent.length;
        var index = 0;
        while (index < len) {
            var char = this.fileContent[index];
            if (this.searchingStart) {
                if (char == '{') {
                    this.startIndex = index;
                    this.searchingStart = false;
                }
            }
            else {
                if (char == '}') {
                    this.endIndex = index;
                    this.searchingStart = true;
                    this.glyphs.push(new Glyph(this.fileContent[this.startIndex - 1], this.fileContent.substring(this.startIndex + 1, this.endIndex)));
                }
            }
            //increment index
            index++;
        }
        // for (const index in this.glyphs) 
        // {
        //     console.log(`Identifier: ${this.glyphs[index].identifier}, ${this.glyphs[index].content}`)
        // }
        this.ConvertToHTML();
    };
    Interpreter.prototype.ConvertToHTML = function () {
        var html = "";
        for (var index in this.glyphs) {
            var id = this.glyphs[index].identifier;
            var content = this.glyphs[index].content;
            var tags = exports.ParsingTable[id];
            html += tags[0] + content + tags[1] + "\n";
        }
        console.log(html);
        this.html = html;
    };
    return Interpreter;
}());
exports.Interpreter = Interpreter;
