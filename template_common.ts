import { AboutPageData, ProjectData, SiteMetaData } from './data_structures'


export function Header(): string
{
    return `
    <head>
        <meta charset="UTF-8">
        <title>Codrin-Mihail</title>

        <!--    css stylesheets-->
        <link rel="stylesheet" type="text/css" href= "css/fonts.css" >
        <link rel="stylesheet" type="text/css" href= "css/master.css" >
        <link rel="stylesheet" type="text/css" href= "css/mediaqueries.css" >
    </head>
    `
}


export function Footer(about : AboutPageData) : string 
{
    return `
    <section id="footer">
        <div id="footer-links">
            <h1><a href="${about.githubLink}">GitHub</a>  </h1>
            <h1><a href="${about.linkedinLink}">LinkedIn</a></h1>
            <h1><a href="${about.twitterLink}">Twitter</a></h1>
        </div>
    </section>
    `;
}