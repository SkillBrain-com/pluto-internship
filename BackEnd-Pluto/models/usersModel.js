const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const { Schema } = mongoose;

const UserSchema = new Schema({
    name: String,
    password: String,
    email: String,
    pic: String,
});

const UserModel = mongoose.model('userModel', UserSchema)

module.exports = UserModel;