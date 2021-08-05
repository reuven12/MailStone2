const fs=require('fs');
let input=require('prompt-sync')();


delete_file=()=>{
console.log('enter name file to delete');
let file=input('');
try{
    fs.unlinkSync(file)
    console.log('The file was deleted successfully');
}catch(err){
    console.log('File not found\n');
}
}
module.exports=delete_file()