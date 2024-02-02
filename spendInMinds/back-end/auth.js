// const e = require('express');
// const m = require('mongoose');
// const c = require('cors');
// const b = require('bcrypt');
// const s = 10;

// const mModel = require('./models/spendInMInds.js');

// const a = e();
// a.use(e.json());
// a.use(c());

// m.connect("mongodb://127.0.0.1:27017/spenInMinds");

// a.post("/login", async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const user = await mModel.findOne({ email });
//         if (user) {
//             const passwordMatch = await b.compare(password, user.password);
//             if (passwordMatch) {
//                 res.json("Success");
//             } else {
//                 res.json("Wrong Password");
//             }
//         } else {
//             res.json("User not found");
//         }
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });

// a.post('/register', async (req, res) => {
//     try {
//         const hashedPassword = await b.hash(req.body.password, s);
//         req.body.password = hashedPassword;
//         const usersSignUp = await mModel.create(req.body);
//         res.json(usersSignUp);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });

// const PORT = 3001;

// a.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}...`);
// });


const e = require('express');
const c = require('cors');

require('dotenv').config();

const app = e();

const PORT = process.env.PORT 

// Middleware
app.use(e.json());
app.use(c());

const server = () => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}...`);
    });
}

server();
