const fs=require('fs');
let input=require('prompt-sync')();

Write_text=()=>{

    console.log('enter name file to edit');
    let file=input('');
    console.log('Write to file');
    let write=input('')
    
    const dir = file;

    if (!fs.existsSync(dir)){
    console.log('Error: The file not found\n');
    } else{
        fs.appendFileSync(dir,write)
        console.log('The file was created successfully');
    }
}   
module.exports=Write_text()
