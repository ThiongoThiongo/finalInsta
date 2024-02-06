import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const creditSchema = mongoose.Schema({


    cvc:{
        type:Number,
        required: true
    },
    agentId: {
        type:String
    }, 
    checked:{
        type:Boolean
    }

}, {
     timestamps:true
})



const Credit = mongoose.model('Credit', creditSchema);
export default Credit;    