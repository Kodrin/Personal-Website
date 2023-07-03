import * as fs from 'fs'
import * as global from './global'

import { Marked } from '@ts-stack/markdown'


export class AboutPageData
{
    public bio : string
    public photographyLink : string
    public githubLink : string
    public linkedinLink : string
    public twitterLink : string

    constructor(
        bio : string,
        photographyLink : string,
        githubLink : string,
        linkedinLink : string,
        twitterLink : string)
    {
        this.bio = bio
        this.photographyLink = photographyLink
        this.githubLink = githubLink
        this.linkedinLink = linkedinLink
        this.twitterLink = twitterLink
    }
}

export class ProjectData
{
    public display : boolean
    public priority : number
    public title : string
    public date : string
    public markdownPath : string
    public tags : string[]

    // generated params
    public markdownContent : string
    public html : string
    public month : number
    public year : number

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

        this.GetMonth()
        this.GetYear()
        this.ReadMarkdown()
    }

    public GetMonth() : number
    {
        this.month = parseInt(this.date.slice(0,2))
        return this.month
    }

    public GetYear() : number
    {
        this.year = parseInt(this.date.slice(2,4))
        return this.year
    }

    public GetHTML(markdown : string) : string
    {
        this.html = Marked.parse(markdown)
        return this.html
    }

    // we will also generate html here
    public ReadMarkdown()
    {
        try
        {
            this.markdownContent = fs.readFileSync(global.PAGES_PATH + this.markdownPath, 'utf8')
            this.GetHTML(this.markdownContent)
        }
        catch(error)
        {
            console.error(`Error Reading ${global.PAGES_PATH + this.markdownPath}`)
        }
    }
}

export class SiteMetaData
{
    public projects : ProjectData[]
    public aboutData : AboutPageData

    constructor(
        projects : ProjectData[],
        aboutData : AboutPageData)
    {
        this.projects = projects
        this.aboutData = aboutData
    }
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


export function SortProjectsByPriority(a : ProjectData, b : ProjectData)
{
    //sort by year
    if(a.year < b.year)
    {
        return 1;
    }
    if(a.year > b.year)
    {
        return -1;
    }

    //if year is the same, use the month
    if(a.year == b.year)
    {
        if(a.month < b.month)
        {
            return 1;
        }
        if(a.month > b.month)
        {
            return -1;
        }
    }

    return 0;
}

export function SortProjectsByDate(a : ProjectData, b : ProjectData)
{
    //sort by year
    if(a.year < b.year)
    {
        return 1;
    }
    if(a.year > b.year)
    {
        return -1;
    }

    //if year is the same, use the month
    if(a.year == b.year)
    {
        if(a.month < b.month)
        {
            return 1;
        }
        if(a.month > b.month)
        {
            return -1;
        }
    }

    return 0;
}