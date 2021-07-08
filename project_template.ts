import * as common from './common_template'


export function ProjectHTML(month : string, year : string, projectName : string, projectDetails : string) : string
{
    return `
    <!DOCTYPE html>
    <html lang="en">
    ${common.Header()}
    ${Body(month, year, projectName, projectDetails)}
    </html>
    `
}

export function Body(month : string, year : string, projectName : string, projectDetails : string) : string 
{
    return `
    <body>
    <div id="wrapper">

        <section id="project-header">
            <div id="header-title">
                <h1>${month}/${year} ${projectName}</h1>
            </div>

            <div id="header-links">
                <h1><a href="index.html">Projects</a></h1>
            </div>
        </section>

        <hr class="line">
    
        <section id="project-details">
        ${projectDetails}
        </section>
        
        <!--divider-->
        <hr class="line">

        ${common.Footer()}

    </div>
    </body>
    `
}
