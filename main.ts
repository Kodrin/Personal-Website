import * as global from './global'
import * as fs from 'fs'
import * as path from 'path'
import * as template from './template'
import * as io from './io'
import * as debug from './debug'

import { AboutPageData, ProjectData, SiteMetaData } from './data_structures'
import { Marked } from '@ts-stack/markdown'
import { log } from 'console'




//For storing out project
export let SITE_DATA : SiteMetaData


//PROGRAMS
FetchProjectsAndStore()

console.log(":: FINISHED FETCHING PROJECTS...")
SortProjectData()
GenerateIndex()
GenerateAbout()
GenerateProjects()




//GET PROPJECTS AND STORE THEM TO THE LIST
function FetchProjectsAndStore()
{
    // importing the json meta data
    console.log(":: FETCHING PROJECTS...")

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

}

function SortProjectData()
{
    SITE_DATA.SortProjectsByPriority()
}

function GenerateIndex()
{
    //write the index html
    fs.writeFileSync(global.OUTPUT_PATH + "index.html", template.IndexHTML(SITE_DATA.projects))

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
    for (let i = 0; i < SITE_DATA.projects.length; i++) 
    {
        //project
        const project = SITE_DATA.projects[i]
    
        // create project html with data 
        const html = template.ProjectHTML(project)

        //debug the meta data
        console.log(`Poject name : ${project.title} || date is : ${project.date}, month is ${project.month}, year is ${project.year}`);
        
        //write html to output
        fs.writeFileSync(global.OUTPUT_PATH + `${project.title}.html`, html)
        
    }
}


