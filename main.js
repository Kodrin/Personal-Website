"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var global = require("./global");
var fs = require("fs");
var path = require("path");
var template = require("./template");
var io = require("./io");
var data_structures_1 = require("./data_structures");
var markdown_1 = require("@ts-stack/markdown");
//For storing out project
var SITE_DATA;
var projectsList = [];
function MarkdownToHTML(markdown) {
    return markdown_1.Marked.parse(markdown);
}
if (false) {
    //read the markdown, convert to html
    var markdown = fs.readFileSync(global.MARKDOWN_PATH + "sample.md", 'utf8');
    var toHTML = markdown_1.Marked.parse(markdown);
    console.log(toHTML);
}
// importing the json meta data
if (true) {
    // read the meta file
    var siteDataString = fs.readFileSync(global.META_PATH + "site_data.json", 'utf-8');
    var siteData = JSON.parse(siteDataString);
    var aboutJsonData = siteData.about;
    var projectsJsonData = siteData.projects;
    // importing the about data
    var aboutMetaData = new data_structures_1.AboutPageData(aboutJsonData.bio, aboutJsonData.links.photography, aboutJsonData.links.github, aboutJsonData.links.linkedin, aboutJsonData.links.twitter);
    // improting all the projects
    var projectsMetaData = [];
    for (var index in projectsJsonData) {
        var project = projectsJsonData[index];
        projectsMetaData.push(new data_structures_1.ProjectData(project.display, project.priority, project.title, project.date, project.markdown, project.tags));
    }
    // add it all to site data
    SITE_DATA = new data_structures_1.SiteMetaData(projectsMetaData, aboutMetaData);
    // debugging
    console.log(SITE_DATA.aboutData.photographyLink);
    console.log(SITE_DATA.aboutData.githubLink);
    console.log(SITE_DATA.aboutData.twitterLink);
    console.log(SITE_DATA.aboutData.linkedinLink);
    for (var index in SITE_DATA.projects) {
        console.log(SITE_DATA.projects[index].month);
    }
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
//GET PROPJECTS AND STORE THEM TO THE LIST
function FetchProjectsAndStore() {
    if (false) {
        var projectPaths_1 = io.GetFilesPathInDir(global.PAGES_PATH);
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
                // const project : ProjectStruct =
                // {
                //     markdownPath : projectPaths[i],
                //     name : projectName,
                //     date : date,
                //     month : month,
                //     year : year,
                //     markdownContent : markdown,
                //     htmlContent : html,
                //     tags : tags
                // }
                //push into array
                // projectsList.push(project)
                //debug the meta data
                // console.log(`Poject name : ${project.name} || date is : ${project.date}, month is ${project.month}, year is ${project.year}`);
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
    if (true) {
        var siteDataString = fs.readFileSync(global.META_PATH + "site_data.json", 'utf-8');
        var siteData = JSON.parse(siteDataString);
        for (var i = 0; i < siteData.projects.length; i++) {
            var p = siteData.projects[i];
            //convert md to html
            // const html = MarkdownToHTML(markdown)
            //file naming
            // const basename : string = path.basename(projectPaths[i])
            // const fileName : string = basename.split('.').slice(0, -1).join('.')
            // //meta information
            // const projectName : string = fileName.slice(5)
            // const date : string = fileName.slice(0,4)
            // const month : string = fileName.slice(0,2)
            // const year : string = fileName.slice(2,4)
            // const tags : string[] = new Array("Interactive", "Procedural", "Shaders", "Unity", "Unreal")
            //encapsulates data into struct
            // const project : ProjectStruct =
            // {
            //     markdownPath : "",
            //     name : p.title,
            //     date : p.date,
            //     month : "0",
            //     year : "0",
            //     markdownContent : "",
            //     htmlContent : "",
            //     tags : p.tags
            // }
            //push into array
            // projectsList.push(project)
            //debug the meta data
            // console.log(`Poject name : ${project.name} || date is : ${project.date}, month is ${project.month}, year is ${project.year}`);
        }
    }
    //wait a bit 
    // setTimeout(() => {
    //     GenerateIndex()
    //     // console.log(projectsList.length);
    // }, 2000);
}
function GenerateIndex() {
    //re-arrange project according to date
    // projectsList.sort(CompareDates);
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
    fs.writeFileSync(global.OUTPUT_PATH + "index.html", template.IndexHTML(projectsList));
    console.log(":: GENERATED INDEX.HTML");
}
function GenerateAbout() {
    //ABOUT HTML
    fs.writeFileSync(global.OUTPUT_PATH + "about.html", template.AboutHTML());
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
        // console.log(`Poject name : ${project.name} || date is : ${project.date}, month is ${project.month}, year is ${project.year}`);
        //write html to output
        fs.writeFileSync(global.OUTPUT_PATH + "".concat(project.name, ".html"), html);
    }
}
