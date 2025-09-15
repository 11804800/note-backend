import { model,Schema, STATES } from "mongoose";

const Plan=new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        default:0
    },
    limit:{
        type:Number
    }
});


export default model("plan",Plan);

