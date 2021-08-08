const fs=require('fs')
let input=require('prompt-sync')();


delete_Folder=()=>{
    console.log('Enter the name of the folder you want to delete');
    const deleteFolder=input('');

    try{
        fs.rmdirSync(deleteFolder)
        console.log('The folder was deleted successfully');
    }catch(err){
        console.log('folder not found\n');
    }
    }
    module.exports=delete_Folder()
