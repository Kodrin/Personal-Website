

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


export function Footer() : string 
{
    return `
    <section id="footer">
        <div id="footer-links">
            <h1><a href="https://github.com/Kodrin">GitHub</a>  </h1>
            <h1><a href="https://www.linkedin.com/in/codrin-mihail-tablan-negrei-870344a8">LinkedIn</a></h1>
            <h1><a href="https://twitter.com/CodrinMihail">Twitter</a></h1>
        </div>
    </section>
    `;
}