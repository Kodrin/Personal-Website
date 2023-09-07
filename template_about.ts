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
            I am a Software Developer & Technical Artist with 5 years of experience in the interactive media and games industry. My work has always been about bridging the gap between art and code. I have a solid background in graphics programming leveraging the DirectX API to develop real-time simulations and shaders for projects. I am also proficient in tools development, often leveraging code to create procedural assets or facilitate pipelines. This skillset has put me in a unique position to contribute as a technical artist and software developer by handling various shader-related, real-time VFX and procedural generation tasks (through code and Houdini). If you are looking for someone that can save your studio time, money and headache by building valuable tooling, feel free to contact me about your project.
            </p>
            
        </section>

        <!--divider-->
        <hr class="line">

        ${common.Footer(about)}
    </div>
    </body>
    `
}