const express=require('express');
const router=new express.Router();
const {newCourse,deadCourse} =require('../db/schema')
router.post("/course",async(req,res)=>{
    try {
        const{name,gmail,course,message}=req.body;
        if(name===""||course===""||message===""){
            res.status(422).json({error:"invalid credential"})
        }
        else if(gmail.endsWith("@gmail.com")){
            const user=new newCourse({
                name,email:gmail,course,message
            })
            const result=await user.save();
            res.status(201).send(result)
        }
        else{
            res.status(422).json({error:"invalid credential"})
        }
    } catch (error) {
        res.status(422).send('error')
    }
})

router.post('/renewlink',async(req,res)=>{
    try {
        const{name,gmail,course}=req.body;
        if (name===""||course==="") {
            res.status(422).json({error:"invalid credential"})
        }
        else if(gmail.endsWith("@gmail.com")){
            const user=new deadCourse({
                name,email:gmail,course
            })
            const result=await user.save();
            res.status(201).send(result)
        }
        else{
            res.status(422).json({error:"invalid credential"})
        }
    } catch (error) {
        res.status(422).send('error')
    }
})

module.exports=router;