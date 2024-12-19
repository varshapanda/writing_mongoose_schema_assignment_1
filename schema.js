const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    roles:{
        type:[String],
        default:['user']
    },
    profile:{
        firstName:{
            type:String
        },
        lastName:{
            type:String
        },
        age:{
            type:Number
        }
    },
    lastLogin:{
        type:Date
    }

});

module.exports = mongoose.model('User', userSchema);
