import * as fs from 'fs'
import * as global from './global'
import { log } from 'console'


export const ParsingTable = 
{
    'P' : [`<p>`, `</p>`],
    'I' : [`<p><img src="`, `"></p>`],
    'V' : [`<div class="videoWrapper"><iframe src="`, `" autoplay="0" frameborder="0" allowfullscreen></iframe></div>`]
}

export class Glyph
{
    public identifier : string
    public content : string

    public constructor(identifier : string, content : string)
    {
        this.identifier = identifier
        this.content = content
    }
}

export class Interpreter
{
    public filePath : string
    public fileContent : string
    public glyphs : Glyph[] = []
    public html : string

    private searchingStart : boolean = true
    private startIndex : number
    private endIndex : number

    public constructor(filePath : string)
    {
        this.filePath = filePath

        this.ReadFile()
    }

    public ReadFile()
    {
        this.fileContent = fs.readFileSync(this.filePath, 'utf-8')
    }
    
    public Interpret()
    {
        const len : number = this.fileContent.length
        let index : number = 0
        
        
        while(index < len)
        {
            const char : string = this.fileContent[index]
            if(this.searchingStart)
            {
                if(char == '{')
                {
                    this.startIndex = index
                    this.searchingStart = false
                }
            }
            else
            {
                if(char == '}')
                {
                    this.endIndex = index
                    this.searchingStart = true
                    this.glyphs.push(
                        new Glyph(
                            this.fileContent[this.startIndex - 1],
                            this.fileContent.substring(this.startIndex + 1, this.endIndex)
                        )
                    )
                }
            }

            
            //increment index
            index++
        }

        // for (const index in this.glyphs) 
        // {
        //     console.log(`Identifier: ${this.glyphs[index].identifier}, ${this.glyphs[index].content}`)

        // }

        this.ConvertToHTML()
    }
    
    public ConvertToHTML()
    {
        let html : string = ""
        for (const index in this.glyphs) 
        {
            const id = this.glyphs[index].identifier
            const content = this.glyphs[index].content
            
            const tags : string[] = ParsingTable[id] 

            html += tags[0] + content + tags[1] + `\n`
        }

        console.log(html)
        this.html = html
    }
}