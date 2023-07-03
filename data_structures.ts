import { Marked } from '@ts-stack/markdown'


export class AboutPageData
{

}

export class ProjectData
{
    public display : boolean
    public priority : number
    public title : string
    public date : string
    public markdownPath : string
    public tags : string[]

    constructor(
        display : boolean,
        priority : number,
        title : string,
        date : string,
        markdownPath : string,
        tags : string[])
    {
        this.display = display
        this.priority = priority
        this.title = title
        this.date = date
        this.markdownPath = markdownPath
        this.tags = tags
    }
}

export class SiteMetaData
{
    public projects : ProjectData[]
    public aboutData : AboutPageData
}

export class ProjectStruct
{
    public display : boolean
    public priority : number
    public markdownPath : string
    public name : string
    public date : string
    public markdownContent : string
    public htmlContent : string
    public tags : string[]

    constructor()
    {

    }

    public GetMonth() : number
    {
        return 0
    }

    public GetYear() : number
    {
        return 0
    }

    public GetHTML(markdown : string) : string
    {
        return Marked.parse(markdown)
    }

}