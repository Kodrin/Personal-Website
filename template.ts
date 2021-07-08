//TEMPLATES
import * as common from './common_template'
import * as index from './index_template'
import * as project from './project_template'
import * as about from './about_template'

//CONSTANTS
const META : string = "";
const TITLE : string = "Codrin-Mihail"
const HEADER : string = "";
const BODY : string = "";
const FOOTER : string = "";
const MEDIA : string = "";


export function IndexHTML(projects : string[]) : string 
{
    return `
    <!DOCTYPE html>
    <html lang="en">
    ${common.Header()}
    ${index.Body(projects)}
    </html>
    `
}

export function ProjectHTML(month : string, year : string, projectName : string, projectDetails : string) : string
{
    return `
    <!DOCTYPE html>
    <html lang="en">
    ${common.Header()}
    ${project.Body(month, year, projectName, projectDetails)}
    </html>
    `
}

export function AboutHTML() : string 
{
    return `
    <!DOCTYPE html>
    <html lang="en">
    ${common.Header()}
    ${about.Body()}
    </html>
    `
}