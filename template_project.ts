import * as common from './template_common'
import { IProjectStruct } from './data_structures'


export function ProjectHTML(project : IProjectStruct) : string
{
    return `
    <!DOCTYPE html>
    <html lang="en">
    ${common.Header()}
    ${Body(project)}
    </html>
    `
}

export function Body(project : IProjectStruct) : string 
{
    return `
    <body>
    <div id="wrapper">

        <section id="project-header">
            <div id="header-title">
                <h1>${project.month}/${project.year} ${project.name}</h1>
            </div>

            <div id="header-links">
                <h1><a href="index.html">Projects</a></h1>
            </div>
        </section>

        <hr class="line">
    
        <section id="project-details">
        ${project.htmlContent}
        </section>
        
        <!--divider-->
        <hr class="line">

        ${common.Footer()}

    </div>
    </body>
    `
}
