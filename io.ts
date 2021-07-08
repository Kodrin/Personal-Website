//libraries and utilities
import * as fs from 'fs';
import * as path from 'path';

const SUPPORTED_FORMATS : string[] =
[
    'md'
]

//recursive file search
export function GetFilesPathInDir(dir : string) : string[]
{
    let images : string[] = []; 

    let dirContent : string[] = fs.readdirSync(dir);

    dirContent.forEach(image => {
        
        ///get extension name 
        const ext : string = GetFileExtension(image);

        //loop through supported formats
        SUPPORTED_FORMATS.forEach(format => {
            if(ext == format)
            {
                //add the path of the image to the array
                images.push(dir + image);
            }
        });

        // //check if its the type of image we are looking for
        // if(ext == 'jpg' || ext == 'png' || ext == 'jpeg')
        // {

        // }


    });

    return images;
}

// export function ReadTextFile(path : string) : string
// {

//     fs.readFile(path + "something.txt", 'utf8', function(err, data) {
//         if (err) throw err;
//         console.log('OK: ' + path + "something.txt");
//         return data;
//       });
// }

export function RenameFile(dir : string, file : string, newName : string)
{
    const ext : string = GetFileExtension(dir + file);
    fs.renameSync(dir + file, dir + `${newName}.${ext}`);
}

//renaming files according to name and increment them 
export function RenameFilesIncrement(dir : string, files : string[], newName : string)
{
    for (let index = 0; index < files.length; index++) {
        const ext : string = GetFileExtension(dir + files[index]);
        fs.renameSync(dir + files[index], dir + `${newName}_${index}.${ext}`);
    }
}

//get files extension
export function GetFileExtension(filePath : string ) : string
{
    let ext : string = path.extname(filePath);
    ext = ext.replace('.', '');
    return ext;
}

//not necessary in ts, just use export before function
// module.exports(
//     GetImagesPathInDir,
//     GetFileExtension
// );