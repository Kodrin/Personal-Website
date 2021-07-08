import * as fs from 'fs'
import * as path from 'path'
import * as template from './template'
import * as io from './io'
import * as debug from './debug'

import { Marked } from '@ts-stack/markdown'

//CONSTANTS
const RUN_MAIN : boolean = true

const PAGES_PATH : string = __dirname + "/pages/"
const OUTPUT_PATH : string = __dirname + "/output/"
const MARKDOWN_PATH : string = __dirname + "/md/"


//For storing out project
let projectsList : ProjectStruct[] = []

interface ProjectStruct
{
    markdownPath : string,
    name : string,
    date : string,
    month : string,
    year : string,
    markdownContent : string

}

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


//
if(true)
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
            const projectDetails = MarkdownToHTML(markdown)
            
            //file naming
            const basename : string = path.basename(projectPaths[i])
            const fileName : string = basename.split('.').slice(0, -1).join('.')
            
            //meta information
            const projectName : string = fileName.slice(5)
            const date : string = fileName.slice(0,4)
            const month : string = fileName.slice(0,2)
            const year : string = fileName.slice(2,4)

            //encapsulates data into struct
            const project : ProjectStruct =
            {
                markdownPath : projectPaths[i],
                name : projectName,
                date : date,
                month : month,
                year : year,
                markdownContent : markdown
            }

            //push into array
            projectsList.push(project)

            //debug the meta data
            console.log(`Poject name : ${project.name} || date is : ${project.date}, month is ${project.month}, year is ${project.year}`);
            // console.log(project);
             
        });
    }
    //NEED TO USE PROMISES!

    // console.log(projectsList.length);
    
}


if(false)
{

    //INDEX HTML

    //get all paths for markdown project files 
    const projectPaths = io.GetFilesPathInDir(PAGES_PATH)

    const projects = io.GetFilesPathInDir(PAGES_PATH)

    //crop the path and extension
    for (let i = 0; i < projects.length; i++) 
    {
        const element = projects[i];

        const basename : string = path.basename(projects[i])
        const name : string = basename.split('.').slice(0, -1).join('.')
        projects[i] = name
        
    }

    //write the index html
    fs.writeFileSync(OUTPUT_PATH + "index.html", template.IndexHTML(projects))


    //PROJECTS HTML

    //for each project markdown you find
    for (let i = 0; i < projectPaths.length; i++) 
    {
        
        //read them
        fs.readFile(projectPaths[i], 'utf8', function(err, markdown) {
            if (err) throw err;

            //convert md to html
            const projectDetails = MarkdownToHTML(markdown)
            
            //file naming
            const basename : string = path.basename(projectPaths[i])
            const fileName : string = basename.split('.').slice(0, -1).join('.')
            
            //meta information
            const projectName : string = fileName.slice(5)
            const date : string = fileName.slice(0,4)
            const month : string = fileName.slice(0,2)
            const year : string = fileName.slice(2,4)

            // create project html with data 
            const html = template.ProjectHTML(month, year, projectName, projectDetails)


            //debug the meta data
            console.log(`Poject name : ${projectName} || date is : ${date}, month is ${month}, year is ${year}`);
            
            //write html to output
            fs.writeFileSync(OUTPUT_PATH + `${fileName}.html`, html)
        
        });
    }

    //ABOUT HTML
    fs.writeFileSync(OUTPUT_PATH + "about.html", template.AboutHTML())

}