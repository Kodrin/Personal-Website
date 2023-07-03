import * as fs from 'fs'
import * as path from 'path'
import * as template from './template'
import * as io from './io'
import * as debug from './debug'

import { ProjectData, ProjectStruct } from './data_structures'
import { Marked } from '@ts-stack/markdown'
import { log } from 'console'

//CONSTANTS
const RUN_MAIN : boolean = true

const META_PATH : string = __dirname + "/meta/"
const PAGES_PATH : string = __dirname + "/pages/"
const OUTPUT_PATH : string = __dirname + "/output/"
const MARKDOWN_PATH : string = __dirname + "/md/"


//For storing out project
let projectsMetaData : ProjectData[] = []
let projectsList : ProjectStruct[] = []


function MarkdownToHTML(markdown : string) : string
{
    return Marked.parse(markdown)
}

if(false)
{
    //read the markdown, convert to html
    const markdown = fs.readFileSync(MARKDOWN_PATH + "sample.md", 'utf8')
    const toHTML = Marked.parse(markdown)
    console.log(toHTML);
    
}

// importing the json meta data
if(true)
{
    // read the meta file
    const siteDataString = fs.readFileSync(META_PATH + "site_data.json", 'utf-8')
    const siteData = JSON.parse(siteDataString)
    const aboutJsonData = siteData.about;
    const projectsJsonData = siteData.projects;
    
    for (const index in projectsJsonData) 
    {
        const project = projectsJsonData[index];
        projectsMetaData.push(
            new ProjectData(
                project.display,
                project.priority,
                project.title,
                project.date,
                project.markdownPath,
                project.tags
            )
        )
        // console.log(projectsJsonData[index].title);
    }


    // debugging
    for (const index in projectsMetaData) 
    {
        console.log(projectsMetaData[index].priority)

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
console.log(":: FETCHING PROJECTS...")
FetchProjectsAndStore()

setTimeout(() => { 
    console.log(":: FINISHED FETCHING PROJECTS...")
    GenerateIndex()
    GenerateAbout()
    GenerateProjects()

}, 1000)


// function CompareDates(a : ProjectStruct, b : ProjectStruct)
// {
//     //sort by year
//     if(a.year < b.year)
//     {
//         return 1;
//     }
//     if(a.year > b.year)
//     {
//         return -1;
//     }

//     //if year is the same, use the month
//     if(a.year == b.year)
//     {
//         if(a.month < b.month)
//         {
//             return 1;
//         }
//         if(a.month > b.month)
//         {
//             return -1;
//         }
//     }

//     return 0;
// }

//GET PROPJECTS AND STORE THEM TO THE LIST
function FetchProjectsAndStore()
{

    if(false)
    {
        const projectPaths = io.GetFilesPathInDir(PAGES_PATH)

        //for each project markdown you find
        for (let i = 0; i < projectPaths.length; i++) 
        {
            
            //read them
            fs.readFile(projectPaths[i], 'utf8', function(err, markdown) 
            {
                //error handling
                if (err) throw err;

                //convert md to html
                const html = MarkdownToHTML(markdown)
                
                //file naming
                const basename : string = path.basename(projectPaths[i])
                const fileName : string = basename.split('.').slice(0, -1).join('.')
                
                //meta information
                const projectName : string = fileName.slice(5)
                const date : string = fileName.slice(0,4)
                const month : string = fileName.slice(0,2)
                const year : string = fileName.slice(2,4)
                const tags : string[] = new Array("Interactive", "Procedural", "Shaders", "Unity", "Unreal")

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
        }


        
        //NEED TO USE PROMISES! or callbacks
        
        
    }
    
    if(true)
    {
        const siteDataString = fs.readFileSync(META_PATH + "site_data.json", 'utf-8')
        const siteData = JSON.parse(siteDataString)
        for (let i = 0; i < siteData.projects.length; i++) 
        {
            const p = siteData.projects[i];

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

function GenerateIndex()
{
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
    fs.writeFileSync(OUTPUT_PATH + "index.html", template.IndexHTML(projectsList))

    console.log(":: GENERATED INDEX.HTML");
    
}

function GenerateAbout()
{
    //ABOUT HTML
    fs.writeFileSync(OUTPUT_PATH + "about.html", template.AboutHTML())
}


function GenerateProjects()
{
    // console.log(projectsList.length);
    
    //PROJECTS HTML
    //get all paths for markdown project files 
    // const projectPaths = io.GetFilesPathInDir(PAGES_PATH)
    

    //for each project markdown you find
    for (let i = 0; i < projectsList.length; i++) 
    {
        //project
        const project = projectsList[i]
    
        // create project html with data 
        const html = template.ProjectHTML(project)

        //debug the meta data
        // console.log(`Poject name : ${project.name} || date is : ${project.date}, month is ${project.month}, year is ${project.year}`);
        
        //write html to output
        fs.writeFileSync(OUTPUT_PATH + `${project.name}.html`, html)
        
    }
}


