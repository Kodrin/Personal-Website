import * as common from './template_common'


export function Body() : string
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

        <section id="bio">
            <p>
            </p>
        </section>

        <!--divider-->
        <hr class="line">

        ${common.Footer()}
    </div>
    </body>
    `
}