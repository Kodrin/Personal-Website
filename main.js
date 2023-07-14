"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SITE_DATA = void 0;
var global = require("./global");
var fs = require("fs");
var template = require("./template");
var data_structures_1 = require("./data_structures");
// let foo : Interpreter = new Interpreter(global.PAGES_PATH + "Sample.md")
// foo.Interpret()
if (true) {
    //PROGRAMS
    FetchProjectsAndStore();
    console.log(":: FINISHED FETCHING PROJECTS...");
    SortProjectData();
    GenerateIndexPage();
    GenerateAboutPage();
    GenerateProjectPages();
}
//GET PROPJECTS AND STORE THEM TO THE LIST
function FetchProjectsAndStore() {
    // importing the json meta data
    console.log(":: FETCHING PROJECTS...");
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
    exports.SITE_DATA = new data_structures_1.SiteMetaData(projectsMetaData, aboutMetaData);
}
function SortProjectData() {
    exports.SITE_DATA.SortProjectsByPriority();
}
function GenerateIndexPage() {
    //write the index html
    fs.writeFileSync(global.OUTPUT_PATH + "index.html", template.IndexHTML(exports.SITE_DATA.aboutData, exports.SITE_DATA.projects));
    console.log(":: GENERATED INDEX.HTML");
}
function GenerateAboutPage() {
    //ABOUT HTML
    fs.writeFileSync(global.OUTPUT_PATH + "about.html", template.AboutHTML(exports.SITE_DATA.aboutData));
}
function GenerateProjectPages() {
    //for each project markdown you find
    for (var index in exports.SITE_DATA.projects) {
        var project = exports.SITE_DATA.projects[index];
        if (!project.display)
            continue; // if display not enabled, dont generate
        // create project html with data 
        var html = template.ProjectHTML(exports.SITE_DATA.aboutData, project);
        //debug the meta data
        // console.log(`Poject name : ${project.title} || date is : ${project.date}, month is ${project.month}, year is ${project.year}`);
        console.log("Generated::Poject : ".concat(project.title));
        //write html to output
        fs.writeFileSync(global.OUTPUT_PATH + "".concat(project.title, ".html"), html);
    }
}
