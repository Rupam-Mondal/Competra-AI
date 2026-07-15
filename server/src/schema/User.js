import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    clerkId: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    firstName: {
      type: String,
      default: "",
    },

    lastName: {
      type: String,
      default: "",
    },

    imageUrl: {
      type: String,
      default: "",
    },
    lastLoginAt: {
      type: Date,
      default: Date.now,
    },

} , {
    timestamps:true
})

const User = mongoose.model("User" , UserSchema);

export default User;