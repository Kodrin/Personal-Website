import * as common from './template_common'
import { ProjectData, AboutPageData } from './data_structures'


export function ProjectHTML(about : AboutPageData, project : ProjectData) : string
{
    return `
    <!DOCTYPE html>
    <html lang="en">
    ${common.Header()}
    ${Body(about, project)}
    </html>
    `
}

export function Body(about : AboutPageData, project : ProjectData) : string 
{
    return `
    <body>
    <div id="wrapper">

        <section id="project-header">
            <div id="header-title">
                <h1>${project.title}</h1>
            </div>

            <div id="header-links">
                <h1><a href="index.html">Projects</a></h1>
            </div>
        </section>

        <hr class="line">
    
        <section id="project-details">
        ${project.html}
        </section>
        
        <!--divider-->
        <hr class="line">
        
        ${common.Footer(about)}
        
        </div>
        </body>
        `
    }
    
    // project html