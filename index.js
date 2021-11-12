#!/user/bin/env node

const miPaquete = require("exercise-clean-folder-rodicaf");
const fs = require("fs");


fs.readdir("./DeleteMe", async (error,files)=>{
    if(error) throw error;
    console.log('aaaaaaaaaaaaaaaaaa');

    const filesToDelete = {
        file1: 'npm-package_1.docx',
        file2: 'npm-package_2.docx',
        file3: 'npm-package_3.docx'
    }

    for(let key in filesToDelete) {
        console.log(filesToDelete[key])
        await fs.unlink('./DeleteMe/' + filesToDelete[key], (error) => { 
        if (error) throw error;
        console.log('File deleted: ' + filesToDelete[key]);
        })
    }
});   