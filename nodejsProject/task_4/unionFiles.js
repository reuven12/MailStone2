const fs =require('fs')
let input=require('prompt-sync')();

union_files=()=>{
    console.log('Enter file name 1');
    const file1=input('')
    console.log('Enter the file name 2');
    const file2=input('')

    if(fs.existsSync('./A/'+file1&&'./A/'+file2)){
       const b=(fs.readFyleSync('./A/'+file1,utf8))
       fs.appendFileSync(file2,b)
        console.log('The content passed successfully');
        fs.writeFileSync('./A/'+file1,'')
    }
}
module.exports=union_files()
