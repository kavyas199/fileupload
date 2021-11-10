const express= require('express');
const multer= require('multer');
const app = express();

const storage = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null, 'images');
    },
    filename:(req,file,cb)=>{
        const {originalname} = file;
        cb(null,originalname)
    }
   });

   const upload= multer({ storage });
   
app.post('/images',upload.single('image'),(req,res) =>{
   try{
    const file = req.file;
    console.log(file);
   }catch(err){
       console.log({message:err});
   }    
});

app.listen(8080,()=>{console.log("listening port 8080")});
//const express = require('express');
const fs = require('fs');
const download = require('download');

const url="https://images.pexels.com/photos/5919667/pexels-photo-5919667.jpeg";
(async () => {
    await download(url, 'dist');
 
    fs.writeFileSync('dist/pexels-photo-5919667.jpeg', await download(url));
 
    download('images.pexels.com/photos/5919667/pexels-photo-5919667.jpeg')
    .pipe(fs.createWriteStream('dist/cool.jpg'));
 
    // download array of images
    await Promise.all([
        'images.pexels.com/photos/5919667/pexels-photo-5919667.jpeg',
        'images.pexels.com/photos/736230/pexels-photo-736230.jpeg',
        'https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg',
        'https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277__340.jpg'
    ].map(url => download(url, 'dist')));
})()

