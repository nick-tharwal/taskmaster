const router = require('express').Router();
//importing todo model
const todoItemsModel = require('../models/todoitems');

//adding to do items
router.post('/api/item' , async(req,res)=>{
    try{
        const newItem = new todoItemsModel({
            item : req.body.item
        })
        
        //saving it to database
        const saveItem = await newItem.save()
        res.status(200).json('Items added successfully');
    }catch(err){
       res.json(err);
    }
})

//second router to view items 
router.get('/api/items' ,async(req,res)=>{
    try{
      const allTodoItems = await todoItemsModel.find({});
      res.status(200).json(allTodoItems);
    }catch(err){
        res.json(err)
    }
})

//update items
router.put('/api/item/:id', async(req, res)=>{
   try{
    //fistly finding the item
    const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id,{$set : req.body});
    res.status(200).json('Items updates'); 

   }catch(err)
     {
        res.json(err);
     }
})

router.delete('/api/item/:id', async(req, res)=>{
    try{
     //fistly finding the item
     const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id);
     res.status(200).json('Items Deleted'); 
 
    }catch(err)
      {
         res.json(err);
      }
 })
 






//export router
module.exports = router;