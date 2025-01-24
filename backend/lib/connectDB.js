import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("MongoDB Connected");
    } catch (err) {
        console.error(err);
    }
}

export default connectDB;