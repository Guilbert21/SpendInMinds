// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const spendInMindsModel = require('./models/spendInMinds.js');

// const app = express();
// app.use(express.json());
// app.use(cors());

// mongoose.connect("mongodb://127.0.0.1:27017/spenInMinds");

// app.post("/login", (req, res) => {
//     const { email, password } = req.body;
//     spendInMindsModel.findOne({ email: email })
//         .then(user => {
//             if (user) {
//                 if (user.password === password) {
//                     res.json("Success");
//                 } else {
//                     res.json("Wrong Password");
//                 }
//             } else {
//                 res.json("User not found");
//             }
//         })
// });

// app.post('/register', (req, res) => {
//     spendInMindsModel.create(req.body)
//         .then(usersSignUp => res.json(usersSignUp))
//         .catch(err => {
//             console.error(err);
//             res.status(500).json({ error: "Internal Server Error" });
//         });
// });

// const PORT = 3001;

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}...`);
// });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const spendInMindsModel = require('./models/spendInMInds.js');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/spenInMinds");

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await spendInMindsModel.findOne({ email: email });
        if (user) {
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (passwordMatch) {
                res.json("Success");
            } else {
                res.json("Wrong Password");
            }
        } else {
            res.json("User not found");
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        req.body.password = hashedPassword;
        const usersSignUp = await spendInMindsModel.create(req.body);
        res.json(usersSignUp);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});
