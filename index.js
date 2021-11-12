#!/user/bin/env node

const miPaquete = require("exercise-clean-folder-rodicaf");
const fs = require("fs");


fs.readdir("./DeleteMe", async (error, files)=>{
    if(error) throw error;

    for(let key in files) {
        // console.log(filesToDelete[key])
        await fs.unlink('./DeleteMe/' + files[key], (error) => { 
        if (error) throw error;
        console.log('File deleted: ' + files[key]);
        })
    }
});   