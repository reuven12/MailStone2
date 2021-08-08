const fs=require('fs')
let input=require('prompt-sync')();


create_Folder=()=>{

    console.log('What name will the folder be called');
    const folder=input('');
    const dir =folder;
    if(!fs.existsSync(dir)){
        fs.mkdirSync(dir)
        console.log('The folder was created successfully');
    }
    else{
        console.log('The name of this folder already exists');
    }
}
module.exports=create_Folder()
