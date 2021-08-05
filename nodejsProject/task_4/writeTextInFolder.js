const fs=require('fs');
let input=require('prompt-sync')();

Write_text=()=>{
    console.log('enter name file to edit');

    let file=input('');
    console.log('Write to file');
    let write=input('')
    console.log(file);
    // console.log(write);

    // try{
    //     fs.appendFile(file,write)
    //     console.log('The file was created successfully');
    // }catch(err){
    //     console.log('Error: The file could not be created\n');
    // }
    }
    module.exports=Write_text()