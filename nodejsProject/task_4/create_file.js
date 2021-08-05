const fs=require('fs');
let input=require('prompt-sync')();

Createfile=()=>{
console.log('What will be the file name');
let file=input('');
try{
    fs.writeFileSync(file,'')
        console.log('File created successfully');
      
}catch(err){
    console.log('Error: The file could not be created\n');
}
}
module.exports=Createfile()


