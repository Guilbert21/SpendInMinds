const mongoose = require('mongoose');

const IncomeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLenght: 32
    },
    amount: {
        type: Number,
        required: true,
        trim: true,
        maxLenght: 32
    },
    type: {
        type: String,
        default: "Income",
    },
    date: {
        type: Date,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
        maxLenght: 32
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxLenght: 100
    },
}, {timestamps: true})

module.exports = mongoose.model('Income', IncomeSchema);