import * as common from './common_template'


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
                <h1><a href="http://releases.codrinmihail.com/">Releases</a>  </h1><br>
                <h1><a href="about.html">About</a>  </h1>
                <h1><a href="http://www.miha-co.ca/lumograph">Photography</a>  </h1>
            </div>
        </section>

        <!--divider-->
        <hr class="line">

        <section id="bio">
            <p>
                Software Engineer currently working on interactive installations for digital museums. Aside from building interactivity, a big part of my job is also being a technical artist developing developing real-time graphics through shader code. This is why I make <a href="http://releases.codrinmihail.com/"><strong>Plugins/Releases</strong></a> on a monthly basis in the hopes of making it easier for people to understand the nuances of graphics programming. Everything on there is released open-source. Oh! And I do love to shoot <a href="http://www.miha-co.ca/lumograph"><strong>Photos</strong></a> on film with my Olympus OM-10 that I bought for 60$.
            </p>
        </section>

        <!--divider-->
        <hr class="line">

        ${common.Footer()}
    </div>
    </body>
    `
}