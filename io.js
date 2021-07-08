"use strict";
exports.__esModule = true;
exports.GetFileExtension = exports.RenameFilesIncrement = exports.RenameFile = exports.GetFilesPathInDir = void 0;
//libraries and utilities
var fs = require("fs");
var path = require("path");
var SUPPORTED_FORMATS = [
    'md'
];
//recursive file search
function GetFilesPathInDir(dir) {
    var images = [];
    var dirContent = fs.readdirSync(dir);
    dirContent.forEach(function (image) {
        ///get extension name 
        var ext = GetFileExtension(image);
        //loop through supported formats
        SUPPORTED_FORMATS.forEach(function (format) {
            if (ext == format) {
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
exports.GetFilesPathInDir = GetFilesPathInDir;
// export function ReadTextFile(path : string) : string
// {
//     fs.readFile(path + "something.txt", 'utf8', function(err, data) {
//         if (err) throw err;
//         console.log('OK: ' + path + "something.txt");
//         return data;
//       });
// }
function RenameFile(dir, file, newName) {
    var ext = GetFileExtension(dir + file);
    fs.renameSync(dir + file, dir + (newName + "." + ext));
}
exports.RenameFile = RenameFile;
//renaming files according to name and increment them 
function RenameFilesIncrement(dir, files, newName) {
    for (var index = 0; index < files.length; index++) {
        var ext = GetFileExtension(dir + files[index]);
        fs.renameSync(dir + files[index], dir + (newName + "_" + index + "." + ext));
    }
}
exports.RenameFilesIncrement = RenameFilesIncrement;
//get files extension
function GetFileExtension(filePath) {
    var ext = path.extname(filePath);
    ext = ext.replace('.', '');
    return ext;
}
exports.GetFileExtension = GetFileExtension;
//not necessary in ts, just use export before function
// module.exports(
//     GetImagesPathInDir,
//     GetFileExtension
// );
