const mongoose = require('mongoose');

const connectToDB = async () => {
    try {
        mongoose.set('strictQuery', false); 
        const url = process.env.MONGO_URL;
        if (!url) {
            throw new Error('MongoDB URI is not defined');
        }
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to the database");
    } catch (error) {
        console.error("Error connecting to the database:", error);
        throw error; // Re-throw the error for the calling code to handle
    }
}

module.exports = connectToDB;
