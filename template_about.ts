import * as common from './template_common'
import { AboutPageData, ProjectData, SiteMetaData } from './data_structures'


export function Body(about : AboutPageData) : string
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

        <section id="bio">
            <p>

            Welcome! I'm a tech artist with expertise in AAA game development. I specialize in building artist tools and procedural systems in Unreal Engine and Unity. With a solid grasp of Houdini and pipeline establishment, I streamline workflows for optimal efficiency. My understanding of graphics programming and shaders enhances visual quality. Having worked in the interactive media industry, I bring a unique perspective. Proficient in C# and C++, I bridge art and technology, delivering exceptional results. Let's collaborate to bring your creative vision to life! Contact me to discuss your next project.
            </p>
            
        </section>

        <!--divider-->
        <hr class="line">

        ${common.Footer(about)}
    </div>
    </body>
    `
}