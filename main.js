"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var template = require("./template");
var io = require("./io");
var markdown_1 = require("@ts-stack/markdown");
//CONSTANTS
var RUN_MAIN = true;
var PAGES_PATH = __dirname + "/pages/";
var OUTPUT_PATH = __dirname + "/output/";
var MARKDOWN_PATH = __dirname + "/md/";
//For storing out project
var projectsList = [];
function MarkdownToHTML(markdown) {
    return markdown_1.Marked.parse(markdown);
}
if (false) {
    //read the markdown, convert to html
    var markdown = fs.readFileSync(MARKDOWN_PATH + "sample.md", 'utf8');
    var toHTML = markdown_1.Marked.parse(markdown);
    console.log(toHTML);
}
//
if (true) {
    var projectPaths_1 = io.GetFilesPathInDir(PAGES_PATH);
    var _loop_1 = function (i) {
        //read them
        fs.readFile(projectPaths_1[i], 'utf8', function (err, markdown) {
            //error handling
            if (err)
                throw err;
            //convert md to html
            var projectDetails = MarkdownToHTML(markdown);
            //file naming
            var basename = path.basename(projectPaths_1[i]);
            var fileName = basename.split('.').slice(0, -1).join('.');
            //meta information
            var projectName = fileName.slice(5);
            var date = fileName.slice(0, 4);
            var month = fileName.slice(0, 2);
            var year = fileName.slice(2, 4);
            //encapsulates data into struct
            var project = {
                markdownPath: projectPaths_1[i],
                name: projectName,
                date: date,
                month: month,
                year: year,
                markdownContent: markdown
            };
            //push into array
            projectsList.push(project);
            //debug the meta data
            console.log("Poject name : " + project.name + " || date is : " + project.date + ", month is " + project.month + ", year is " + project.year);
            // console.log(project);
        });
    };
    //for each project markdown you find
    for (var i = 0; i < projectPaths_1.length; i++) {
        _loop_1(i);
    }
    console.log(projectsList.length);
}
if (false) {
    //INDEX HTML
    //get all paths for markdown project files 
    var projectPaths_2 = io.GetFilesPathInDir(PAGES_PATH);
    var projects = io.GetFilesPathInDir(PAGES_PATH);
    //crop the path and extension
    for (var i = 0; i < projects.length; i++) {
        var element = projects[i];
        var basename = path.basename(projects[i]);
        var name_1 = basename.split('.').slice(0, -1).join('.');
        projects[i] = name_1;
    }
    //write the index html
    fs.writeFileSync(OUTPUT_PATH + "index.html", template.IndexHTML(projects));
    var _loop_2 = function (i) {
        //read them
        fs.readFile(projectPaths_2[i], 'utf8', function (err, markdown) {
            if (err)
                throw err;
            //convert md to html
            var projectDetails = MarkdownToHTML(markdown);
            //file naming
            var basename = path.basename(projectPaths_2[i]);
            var fileName = basename.split('.').slice(0, -1).join('.');
            //meta information
            var projectName = fileName.slice(5);
            var date = fileName.slice(0, 4);
            var month = fileName.slice(0, 2);
            var year = fileName.slice(2, 4);
            // create project html with data 
            var html = template.ProjectHTML(month, year, projectName, projectDetails);
            //debug the meta data
            console.log("Poject name : " + projectName + " || date is : " + date + ", month is " + month + ", year is " + year);
            //write html to output
            fs.writeFileSync(OUTPUT_PATH + (fileName + ".html"), html);
        });
    };
    //PROJECTS HTML
    //for each project markdown you find
    for (var i = 0; i < projectPaths_2.length; i++) {
        _loop_2(i);
    }
    //ABOUT HTML
    fs.writeFileSync(OUTPUT_PATH + "about.html", template.AboutHTML());
}
