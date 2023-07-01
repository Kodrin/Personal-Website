import * as common from './template_common'
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
                <h1><a href="about.html">About</a>  </h1>
                <h1><a href="https://lumograph.codrinmihail.com/">Photography</a>  </h1>
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

export function ProjectTags(project : IProjectStruct) : string
{
    let body = ""
    const tags : string[] = project.tags
    for (let i = 0; i < tags.length; i++) 
    {
        body += ProjectTagSlide(tags[i])
    }

    return body
}

export function ProjectTagSlide(tag : string) : string
{
    return `
    <div class="project-tag">
        <p>${tag}</p>
    </div>

    <!--divider-->
    `
}

export function ProjectSlide(project : IProjectStruct) : string 
{
    return `
    <div class="project-entry">
        <a href="${project.name}.html"><img src="media/${project.name}/thumbnail.jpg"></a>
        <div class="project-info-tab">
            <div class="project-info">
                <div class="project-name">
                    <h1><a href="${project.name}.html">${project.month}/${project.year}</a></h1><p><a href="${project.name}.html"> ${project.name}</a></p>
                </div>

                <div class="project-tags">
                    ${ProjectTags(project)}
                </div>
            </div>
        </div>
    </div>

    <!--divider-->
    <hr class="line">
    `
}