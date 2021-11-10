const express= require('express'); 
const snack = require('../models/snack');
const router= express.Router();
 const Post= require('../models/snack'); 
 // getting all posts 
 router.get('/', async(req,res) =>{ 
      try{ const snack = await Post.find(); 
        res.json(snack);
     }catch (err){ res.json({message:err}); } });

  // getting a post by id

  router.get('/:postid', async(req,res) =>{
      try{ const snack = await Post.findById(req.params.postid); 
        res.json(snack); 
    }catch(err){ res.json({message:err}); } })

   // creating a post

 router.post('/',(req,res)=>{ const snack =new Post({ title:req.body.title,
    calorie:req.body.calorie,
    description:req.body.description,
    price:req.body.price
 });
  snack.save(). then(data =>{ res.json(data); }).catch (err=>{ res.json({message:err}); }) }); 

 // deleting a post

 router.delete('/:postid', async(req,res) =>{ 
     try{ const removesnack = await Post.deleteOne({_id: req.params.postid}); 
     res.json(removesnack);
     }catch(err){ res.json({message:err}); } } ); 

 // updating a post by id

 router.patch('/:postid', async(req,res) =>{ 
    try{ const editsnack = await Post.findOne({_id: req.params.postid}); 
    if(req.body.title){
   editsnack.title=req.body.title;
    }
    if(req.body.calorie){
  editsnack.calorie=req.body.calorie;
   }
   if(req.body.description){
  editsnack.description=req.body.description;
   }
   if(req.body.price){
  editsnack.price=req.body.price;
   }
 await editsnack.save();
 res.json(editsnack)}
 catch(err){ res.json({message:err}); } });

 module.exports= router;