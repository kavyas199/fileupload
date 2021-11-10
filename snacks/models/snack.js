const mongoose = require('mongoose'); 
 const snackSchema= mongoose.Schema({ 
     title:{
         type:String, 
         required:true 
         },
    
     calorie:{
          type:String, 
          require:true
        },
    description:{
            type:String,
            required:true
             },
    price:{
            type:String,
            required:true
    }         
             
    });

 module.exports=mongoose.model('snacks',snackSchema);