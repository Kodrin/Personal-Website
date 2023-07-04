import * as common from './template_common'
import { ProjectData, AboutPageData } from './data_structures'


export function Body(about : AboutPageData, projects : ProjectData[]) : string 
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
                <h1><a href="${about.photographyLink}">Photography</a>  </h1>
            </div>
            </section>

            <!--divider-->
            <hr class="line">

            ${ProjectLists(projects)}
            ${common.Footer(about)}
        </div>
    </body>
    `
}

export function ProjectLists(projects : ProjectData[]) : string 
{
    let body = ""
    for (let i = 0; i < projects.length; i++) 
    {
        if(!projects[i].display) continue;
        body += ProjectSlide(projects[i])
    }

    return body
}

export function ProjectTags(project : ProjectData) : string
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

export function ProjectSlide(project : ProjectData) : string 
{
    return `
    <div class="project-entry">
        <a href="${project.title}.html"><img src="media/${project.title}/thumbnail.jpg"></a>
        <div class="project-info-tab">
            <div class="project-info">
                <div class="project-name">
                    <p><a href="${project.title}.html">${project.title}</a></p>
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

// <h1><a href="${project.name}.html">${project.month}/${project.year}</a></h1>
