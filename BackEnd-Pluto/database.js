require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const uri = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@plutodb.12ahdrj.mongodb.net/?retryWrites=true&w=majority`
const dbConnect = async () => {
    try {
        await mongoose.connect(uri)
        console.log("connected")
    } catch (err){
        console.log(err)
    }
}

module.exports = dbConnect;