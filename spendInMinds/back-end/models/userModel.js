 const mongoose = require('mongoose');
 const bcrypt = require('bcrypt');
 const validator = require('validator');

 const Schema = mongoose.Schema

    const userSchema = new Schema({
        name:{
            type: String,
            required:[true, 'name is required']
        },
        email:{
            type: String,
            required:[true, 'email is required'],
            unique: true
        },
        password:{
            type: String,
            required:[true, 'password is required']
        },
    },
        {timestamps: true}
 );

 //static method to signUp user
 userSchema.statics.signup = async function(name, email, password) {

    //validate email
    if (!email || !password) {
        throw Error('All fields are required')
    }
    if (!validator.isEmail(email)) {
    throw Error('Invalid email');   
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password not strong enough')
    }


    const exists = await this.findOne({email});

    if(exists){
        throw Error('Email already exists');
    }

    //hashing password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({name, email, password: hash});

    return user

 }

 //static login method
 userSchema.statics.login = async function(email, password) {
    if (!email || !password) {
        throw new Error('All fields are required');
    }

    const user = await this.findOne({ email });

    if (!user) {
        throw new Error('Email not found');
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw new Error('Incorrect password');
    }

    return user;
};

 module.exports = mongoose.model('User', userSchema);