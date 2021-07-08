import * as common from './common_template'


export function Body(projects : string[]) : string 
{
    return `
    <body>
        <div id="wrapper">
            ${ProjectLists(projects)}
            ${common.Footer()}
        </div>
    </body>
    `
}

export function ProjectLists(projects : string[]) : string 
{
    let body = ""
    for (let i = 0; i < projects.length; i++) 
    {
        body += ProjectSlide(projects[i])
    }

    return body
}


export function ProjectSlide(filename : string) : string 
{
    return `
    <div class="project-entry">
        <a href="${filename}.html"><img src="media/${filename}/1.jpg"></a>
        <h1><a href="${filename}.html">01/20</a></h1><p><a href="${filename}.html"> ${filename}</a></p>
    </div>

    <!--divider-->
    <hr class="line">
    `
}