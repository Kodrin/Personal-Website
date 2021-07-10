import * as common from './common_template'
import { IProjectStruct } from './data_structures'


export function Body(projects : IProjectStruct[]) : string 
{
    return `
    <body>
        <div id="wrapper">

            <section id="header">
            <div id="header-title">
                <h1>Codrin-Mihail<br>Interactive Dev. / Tech Art.</h1>
            </div>

            <div id="header-links">
                <h1><a href="index.html">Projects</a>  </h1>
                <h1><a href="http://releases.codrinmihail.com/">Releases</a>  </h1><br>
                <h1><a href="about.html">About</a>  </h1>
                <h1><a href="http://www.miha-co.ca/lumograph">Photography</a>  </h1>
            </div>
            </section>

            <!--divider-->
            <hr class="line">

            ${ProjectLists(projects)}
            ${common.Footer()}
        </div>
    </body>
    `
}

export function ProjectLists(projects : IProjectStruct[]) : string 
{
    let body = ""
    for (let i = 0; i < projects.length; i++) 
    {
        body += ProjectSlide(projects[i])
    }

    return body
}


export function ProjectSlide(project : IProjectStruct) : string 
{
    return `
    <div class="project-entry">
        <a href="${project.name}.html"><img src="media/${project.name}/thumbnail.jpg"></a>
        <h1><a href="${project.name}.html">${project.month}/${project.year}</a></h1><p><a href="${project.name}.html"> ${project.name}</a></p>
    </div>

    <!--divider-->
    <hr class="line">
    `
}