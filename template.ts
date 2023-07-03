//TEMPLATES
import * as common from './template_common'
import * as index_template from './template_index'
import * as project_template from './template_project'
import * as about_template from './template_about'

import { ProjectStruct } from './data_structures'


//CONSTANTS
const META : string = "";
const TITLE : string = "Codrin-Mihail"
const HEADER : string = "";
const BODY : string = "";
const FOOTER : string = "";
const MEDIA : string = "";


export function IndexHTML(projects : ProjectStruct[]) : string 
{
    return `
    <!DOCTYPE html>
    <html lang="en">
    ${common.Header()}
    ${index_template.Body(projects)}
    </html>
    `
}

export function ProjectHTML(project : ProjectStruct) : string
{
    return `
    <!DOCTYPE html>
    <html lang="en">
    ${common.Header()}
    ${project_template.Body(project)}
    </html>
    `
}

export function AboutHTML() : string 
{
    return `
    <!DOCTYPE html>
    <html lang="en">
    ${common.Header()}
    ${about_template.Body()}
    </html>
    `
}