const IncomeSchema = require("../models/incomeModel")

//add income
exports.addIncome = async (req, res) => {
    const {title, amount, category, description, date} = req.body

    const income  = IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        //validation test
        if(!title || !amount || !category || !description || !date){
            return res.status(400).json({message: "All fields are required"})
        }
        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json({message: "Amount must be a number and greater than 0"})
        }
        await income.save()
        res.status(200).json({message: "Income added successfully"})
    } catch (error) {
        res.status(500).json({message: "Server Error"})
    }

    console.log(income)
}

//get income
exports.getIncome = async (req, res) => {
    try {
        const incomes = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: "Server Error"})
    }
}

//delete income
exports.deleteIncome = async (req, res) => {
    const {id} = req.params;
    IncomeSchema.findByIdAndDelete(id)
        .then((income) =>{
            res.status(200).json({message: 'Income Deleted Successfully'})
        })
        .catch((error) => {
            res.status(500).json({message: "Server Error"})
        })
}