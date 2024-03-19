// const userModel = require('../models/userModel')

// const loginController = async(req, res) => {
//     try {
//         const {email, password} = req.body;
//         const user = await userModel.findOne({email, password});
//         if(!user) {
//             return res.status(404).send('Invalid email or password');
//         }
//         res.status(200).json({
//             sucess: true,
//             user,
//         });
//     }   catch(error) {
//         res.status(400).json({
//             sucess : false,
//             error,
//         });
//     }
    
// };

// const registerController = async (req, res) => {
//     try {
//         const newUser = new userModel(req.body);
//         await newUser.save();
//         res.status(201),json({
//             sucess: true,
//             newUser
//         });
//     } catch(error) {
//         res.status(400).json({
//             sucess: false,
//             error,
//         }); 
//     }
// }

// module.exports = {loginController, registerController}


const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

//login user
const loginUser = async (req, res) => {
    const {email, password} = req.body

    try{
        const user = await User.login(email, password);

        //create token jwt
        const token = createToken(user._id)

        res.status(200).json({email, token})  
    }   catch (error){
        res.status(400).json({error: error.message});
    }
}


//signup user
const signupUser = async (req, res) => {

    const {name, email, password} = req.body;

    try{
        const user = await User.signup(name, email, password);

        //create token jwt
        const token = createToken(user._id)

        res.status(200).json({email, token})  
    }catch (error){
        res.status(400).json({error: error.message});
    }
}

module.exports = {loginUser, signupUser}