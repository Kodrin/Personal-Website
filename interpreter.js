"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interpreter = exports.Glyph = exports.Glyphs = void 0;
var fs = require("fs");
exports.Glyphs = [];
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
        for (var index_1 in this.glyphs) {
            console.log("Identifier: ".concat(this.glyphs[index_1].identifier, ", ").concat(this.glyphs[index_1].content));
        }
    };
    return Interpreter;
}());
exports.Interpreter = Interpreter;
