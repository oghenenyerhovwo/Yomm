import mongoose from 'mongoose'
const Schema = mongoose.Schema;


const userSchema = new Schema({
    fullName: {type: String, required: true},
    email: {type: String, required:true, unique: true},
    password: {type: String, required:true},
    isVerified: {type: Boolean, default: false,},
    role: {
        type: String,
        default: "client",
        enum: ["client", "admin"]
    },
    phoneNumber: {type: String, required:true, unique: true},
    rating: {type: Number,},
}, {
    timestamps: true
});

const User= mongoose.model('User', userSchema);

export default User