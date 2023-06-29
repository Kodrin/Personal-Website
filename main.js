"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
// let promise = new Promise(function(resolve, reject)
// {
//     // setTimeout(() => resolve("done!"), 1000);
//     FetchProjectsAndStore()
//     setTimeout(() => {
//         ":: FETCHING PROJECTS..."
//     }, 1000);
//     if(projectsList.length > 0)
//     {
//         resolve("done!")
//     }
//     else
//     {
//         reject("The promise is rejected")
//     }
// })
// promise.then(res => {
//     console.log("Resolved with then!");
// }).catch( err => {
// })
//PROGRAMS
console.log(":: FETCHING PROJECTS...");
FetchProjectsAndStore();
setTimeout(function () {
    console.log(":: FINISHED FETCHING PROJECTS...");
    GenerateIndex();
    GenerateAbout();
    GenerateProjects();
}, 1000);
function CompareDates(a, b) {
    //sort by year
    if (a.year < b.year) {
        return 1;
    }
    if (a.year > b.year) {
        return -1;
    }
    //if year is the same, use the month
    if (a.year == b.year) {
        if (a.month < b.month) {
            return 1;
        }
        if (a.month > b.month) {
            return -1;
        }
    }
    return 0;
}
//GET PROPJECTS AND STORE THEM TO THE LIST
function FetchProjectsAndStore() {
    if (true) {
        var projectPaths_1 = io.GetFilesPathInDir(PAGES_PATH);
        var _loop_1 = function (i) {
            //read them
            fs.readFile(projectPaths_1[i], 'utf8', function (err, markdown) {
                //error handling
                if (err)
                    throw err;
                //convert md to html
                var html = MarkdownToHTML(markdown);
                //file naming
                var basename = path.basename(projectPaths_1[i]);
                var fileName = basename.split('.').slice(0, -1).join('.');
                //meta information
                var projectName = fileName.slice(5);
                var date = fileName.slice(0, 4);
                var month = fileName.slice(0, 2);
                var year = fileName.slice(2, 4);
                var tags = new Array("Interactive", "Procedural", "Shaders", "Unity", "Unreal");
                //encapsulates data into struct
                var project = {
                    markdownPath: projectPaths_1[i],
                    name: projectName,
                    date: date,
                    month: month,
                    year: year,
                    markdownContent: markdown,
                    htmlContent: html,
                    tags: tags
                };
                //push into array
                projectsList.push(project);
                //debug the meta data
                console.log("Poject name : ".concat(project.name, " || date is : ").concat(project.date, ", month is ").concat(project.month, ", year is ").concat(project.year));
                // console.log(project);
                // console.log(projectsList.length);
            });
        };
        //for each project markdown you find
        for (var i = 0; i < projectPaths_1.length; i++) {
            _loop_1(i);
        }
        //NEED TO USE PROMISES! or callbacks
    }
    //wait a bit 
    // setTimeout(() => {
    //     GenerateIndex()
    //     // console.log(projectsList.length);
    // }, 2000);
}
function GenerateIndex() {
    //re-arrange project according to date
    projectsList.sort(CompareDates);
    //INDEX HTML
    //crop the path and extension
    // for (let i = 0; i < projectsList.length; i++) 
    // {
    //     const p = projectsList[i];
    //     const basename : string = path.basename(projectsList[i])
    //     const name : string = basename.split('.').slice(0, -1).join('.')
    //     projectsList[i] = name
    // }
    //write the index html
    fs.writeFileSync(OUTPUT_PATH + "index.html", template.IndexHTML(projectsList));
    console.log(":: GENERATED INDEX.HTML");
}
function GenerateAbout() {
    //ABOUT HTML
    fs.writeFileSync(OUTPUT_PATH + "about.html", template.AboutHTML());
}
function GenerateProjects() {
    // console.log(projectsList.length);
    //PROJECTS HTML
    //get all paths for markdown project files 
    // const projectPaths = io.GetFilesPathInDir(PAGES_PATH)
    //for each project markdown you find
    for (var i = 0; i < projectsList.length; i++) {
        //project
        var project = projectsList[i];
        // create project html with data 
        var html = template.ProjectHTML(project);
        //debug the meta data
        console.log("Poject name : ".concat(project.name, " || date is : ").concat(project.date, ", month is ").concat(project.month, ", year is ").concat(project.year));
        //write html to output
        fs.writeFileSync(OUTPUT_PATH + "".concat(project.name, ".html"), html);
    }
}
