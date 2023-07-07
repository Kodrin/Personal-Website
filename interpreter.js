"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interpreter = exports.Glyph = exports.ParsingTable = void 0;
var fs = require("fs");
exports.ParsingTable = {
    '@': ["<div class = \"table\">", "</div>"],
    '$': ["<div class = \"image\">", "</div>"],
    '^': ["<div class = \"text\">", "</div>"]
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
    };
    return Interpreter;
}());
exports.Interpreter = Interpreter;
