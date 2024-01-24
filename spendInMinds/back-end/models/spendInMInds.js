const mongoose = require('mongoose');

const spendInMindsSchema = new mongoose.Schema({
    Name: String,
    email: String,
    password: String,
});

const spendInMindsModel = mongoose.model('usersSignUp', spendInMindsSchema);
module.exports = spendInMindsModel;