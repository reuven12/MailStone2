
const randomWord=require('random-words')
const fs=require('fs')

 file_generator=(numFiles,numWords)=> {
    for(let i=0;i<numFiles;i++){

        fs.writeFile(`./created_files/num${i+1}`,randomWord(numWords), function(error){
            if(error) throw error;
        });
        console.log(`file${i+1}: has ${numWords} words`);
        numWords=numWords*2;
    }
}
const args=process.argv.slice(2);
file_generator(args[0],args[0]);






