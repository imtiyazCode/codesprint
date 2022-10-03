const mongoose = require('mongoose');
const { Schema, model, models } = mongoose;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    number: { type: Number, required: true },
    password: { type: String, required: true }
}, { timestamps: true });

const User = models.User || model('User', userSchema)

export default User;