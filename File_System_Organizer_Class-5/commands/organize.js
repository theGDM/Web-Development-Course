const fs = require('fs');
const path = require('path');

//object of all the file category and collections of extension under that file category
let filesType = {
    media: ['mp4', 'mp3', 'mkv'],
    image: ['jpg','jpeg','png'],
    archives: ['zip','7z','tar,','gz','ar','xz','rar', 'iso'],
    document: ['pdf', 'txt', 'doc', 'docx', 'xlsk', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'ps', 'tex'],
    app: ['exe','dmg','pkg','deb']
}

function organizerFn(dirPath) {
    //input is path of directory whose content we want to organize
    let destPath;
    if (dirPath == undefined) {
        console.log("Please enter a Directory Path");
        return;
    } else {
        let doesExist = fs.existsSync(dirPath);
        // console.log(dirPath + " " +doesExist);

        if (doesExist == true) {
            //created a organized files directory
            destPath = path.join(dirPath, 'organized_files');
            //console.log(destPath);
            //D:\Documents\test_folder\organized_files -> new path of folder
            //I want to create all the folder here in destFolder

            if (fs.existsSync(destPath) == false) {
                fs.mkdirSync(destPath); //we will only create a directory if it does not exist
            } else {
                console.log("Directory already created!");
            }
        } else {
            console.log("Provided path name does not exist :(");
        }
    }
    organizeHelper(dirPath, destPath);
}

//we wrote this organizerHelper to categorize the files
function organizeHelper(src, dest) {
    let childNames = fs.readdirSync(src);
    //readdirSync will get all the files and folders in that directory
    //return array of all the existing files, get all the files
    //console.log(childNames);

    for (let i = 0; i < childNames.length; ++i){
        let childAddress = path.join(src, childNames[i]);//path is identified for the file
        let isFile = fs.lstatSync(childAddress).isFile();//we check here to identify for files
        if (isFile) {
            let fileCategory = getCategory(childNames[i]);
            // console.log(childNames[i] + " belongs to " + fileCategory + " category");
            sendFiles(childAddress, dest, fileCategory);
        }
        
    }
}

//function to get the category to which file belongs
function getCategory(name) {
    let ext = path.extname(name).slice(1);//extract extension of files
    for (let ftype in filesType) {
        let categoryTypeArr = filesType[ftype]; //return array of each file category
        // console.log(cateTypeArr);

        for (let i = 0; i < categoryTypeArr.length; ++i){
            if (ext == categoryTypeArr[i]) {// we matched the extension
                return ftype; //we are returning type i.e categoryTypes ex, media, apps, archives
            }
        }
    }
    return "others";
}

//to send files in different folders
function sendFiles(srcFilePath, dest, fileCategory) {
    let catPath = path.join(dest, fileCategory);
    //D:\Documents\test_folder\organized_files\media
    //D:\Documents\test_folder\organized_files\document
    //D:\Documents\test_folder\organized_files\archives
    //D:\Documents\test_folder\organized_files\music
    //D:\Documents\test_folder\organized_files\apps

    if (fs.existsSync(catPath) == false) {
        fs.mkdirSync(catPath); // creating folders to store different files, media, apps, archives, music, document
    }

    let fileName = path.basename(srcFilePath);//extracting file name from their path
    let destFilePath = path.join(catPath, fileName);
    //D:\Documents\test_folder\organized_files\document\test.txt

    fs.copyFileSync(srcFilePath, destFilePath);
    fs.unlinkSync(srcFilePath);
    console.log(fileName + "copied to" + fileCategory);
}

module.exports = {
    organizerFn: organizerFn
}