const mongoose=require('mongoose');

const requestCourse=new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    course:{
        type:String,
        require:true,
    },
    message:{
        type:String,
        require:true,
        trim:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
 const deadlink=new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    course:{
        type:String,
        require:true,
    },
    date:{
        type:Date,
        default:Date.now
    }
 })

 const newCourse=mongoose.model("newCourse",requestCourse);
 const deadCourse=mongoose.model("deadCourse",deadlink);

 module.exports={newCourse,deadCourse}