const fs=require('fs')
let input=require('prompt-sync')();

Create_a_file_from_a_folder=()=>{
    console.log('Enter the name of the folder');
    const The_name_of_the_directory=input('')
    console.log('Enter the file name');
    const file_name=input('')

    if(!fs.existsSync(The_name_of_the_directory&&'./'+The_name_of_the_directory+'/'+file_name)){
       fs.writeFileSync('./'+The_name_of_the_directory+'/'+file_name)
       console.log('The file was deleted successfully');
    }
     else{
        console.log('File not found\n');
     }
    }
    
    module.exports=Create_a_file_from_a_folder()
