const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const spendInMindsModel = require('./models/spendInMinds.js');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/spenInMinds");

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    spendInMindsModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success");
                } else {
                    res.json("Wrong Password");
                }
            } else {
                res.json("User not found");
            }
        })
});

app.post('/register', (req, res) => {
    spendInMindsModel.create(req.body)
        .then(usersSignUp => res.json(usersSignUp))
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: "Internal Server Error" });
        });
});

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});
