const fs=require('fs-extra');
// const{FORMERR}=require('nodcd e:dns');
let prompt=require('prompt-sync')();

let menu=0;
while (menu==0) {

    console.log('Select the action:\n\n1: Delete file\n2:Create file'+
    '\n3: Write text to a file\n4: Create folder \n5: Delete folder'+
     '\n6: Create a file in a folder\n7: Delete a file from a fold'+
     'er\n8: Union Files\n9: Log Off');

let number=prompt('')
switch(number){
    case('1'):
    const removeFile=require('./deleteFile')
    break;

    case('2'):
    const createFile=require('./create_file')
    break;

    case('3'):
    const writeText=require('./writeTextInFolder')
    break;

    case('4'):
    const createFolder=require('./deleteFile')
    break;

    case('5'):
    const deletFolder=require('./deleteFile')
    break;

    case('6'):
    const createFileInFolder=require('./deleteFile')
    break;

    case('7'):
    const deleteFileInAFolder=require('./deleteFile')
    break;

    case('8'):
    const unionFiles=require('./deleteFile')
    break;

    case('9'):
    const logOff=require('./deleteFile')
    break;
}
}

