import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {type: String, required: true },
    email: {type: String, required: true, unique: true },
    password: {type: String, required: true }, 
    isAdmin: { type: Boolean, default: false, required: true }

}, {
    //while mongoose create user, add two fields, created and updated for each creation
    timestamps: true
    }
); 
const User = mongoose.model("User", userSchema);
export default User;