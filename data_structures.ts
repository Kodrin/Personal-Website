
export interface IProjectStruct
{
    markdownPath : string
    name : string
    date : string
    month : string
    year : string
    markdownContent : string
    htmlContent : string
    tags : string[]
}

export class ProjectStruct implements IProjectStruct
{
    markdownPath : string
    name : string
    date : string
    month : string
    year : string
    markdownContent : string
    htmlContent : string
    tags : string[]
}