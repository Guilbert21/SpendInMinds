const userModel = require('../models/userModel')

const loginController = async(req, res) => {
    try {
        const {email, password} = req.body;
        const user = await userModel.findOne({email, password});
        if(!user) {
            return res.status(401).json(message: 'Invalid email or password');
        }
        res.status(200).json({
            sucess: true,
            user,
        });
    }   catch(error) {
        res.status(400).json({
            sucess : false,
            error,
        });
    }
    
};

const registerController = async (req, res) => {
    try {
        const newUser = new userModel(req.body);
        await newUser.save();
        res.status(201),json({
            sucess: true,
            newUser
        });
    } catch(error) {
        res.status(400).json({
            sucess: false,
            error,
        }); 
    }
}

module.exports = {loginController, registerController}