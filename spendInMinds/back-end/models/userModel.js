 const mongoose = require('mongoose');

 const userSchema = new mongoose.Schema({
        name:{
            type: String,
            required:[tue, 'name is required']
        },
        email:{
            type: String,
            required:[tue, 'email is required'],
            unique: true
        },
        password:{
            type: String,
            required:[tue, 'password is required']
        },
        {timestamps}
 });

 const userModel = mongoose.model('users', userSchema)
module.exports = userModel;