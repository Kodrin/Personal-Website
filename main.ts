import * as global from './global'
import * as fs from 'fs'
import * as path from 'path'
import * as template from './template'
import * as io from './io'
import * as debug from './debug'

import { AboutPageData, ProjectData, ProjectStruct, SiteMetaData } from './data_structures'
import { Marked } from '@ts-stack/markdown'
import { log } from 'console'




//For storing out project
let SITE_DATA : SiteMetaData
let projectsList : ProjectStruct[] = []


function MarkdownToHTML(markdown : string) : string
{
    return Marked.parse(markdown)
}

if(false)
{
    //read the markdown, convert to html
    const markdown = fs.readFileSync(global.MARKDOWN_PATH + "sample.md", 'utf8')
    const toHTML = Marked.parse(markdown)
    console.log(toHTML);
    
}

// importing the json meta data
if(true)
{
    // read the meta file
    const siteDataString = fs.readFileSync(global.META_PATH + "site_data.json", 'utf-8')
    const siteData = JSON.parse(siteDataString)
    const aboutJsonData = siteData.about;
    const projectsJsonData = siteData.projects;
    
    
    // importing the about data
    let aboutMetaData : AboutPageData =  new AboutPageData(
        aboutJsonData.bio,
        aboutJsonData.links.photography,
        aboutJsonData.links.github,
        aboutJsonData.links.linkedin,
        aboutJsonData.links.twitter
    )
    
    
    
    // improting all the projects
    let projectsMetaData : ProjectData[] = []
    for (const index in projectsJsonData) 
    {
        const project = projectsJsonData[index];
        projectsMetaData.push(
            new ProjectData(
                project.display,
                project.priority,
                project.title,
                project.date,
                project.markdown,
                project.tags
            )
        )
    }

    // add it all to site data
    SITE_DATA = new SiteMetaData(projectsMetaData, aboutMetaData)

    // debugging
    console.log(SITE_DATA.aboutData.photographyLink)
    console.log(SITE_DATA.aboutData.githubLink)
    console.log(SITE_DATA.aboutData.twitterLink)
    console.log(SITE_DATA.aboutData.linkedinLink)
    for (const index in SITE_DATA.projects) 
    {
        console.log(SITE_DATA.projects[index].month)
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



//GET PROPJECTS AND STORE THEM TO THE LIST
function FetchProjectsAndStore()
{

    if(false)
    {
        const projectPaths = io.GetFilesPathInDir(global.PAGES_PATH)

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
        const siteDataString = fs.readFileSync(global.META_PATH + "site_data.json", 'utf-8')
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
    fs.writeFileSync(global.OUTPUT_PATH + "index.html", template.IndexHTML(projectsList))

    console.log(":: GENERATED INDEX.HTML");
    
}

function GenerateAbout()
{
    //ABOUT HTML
    fs.writeFileSync(global.OUTPUT_PATH + "about.html", template.AboutHTML())
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
        fs.writeFileSync(global.OUTPUT_PATH + `${project.name}.html`, html)
        
    }
}


