import mongoose from 'mongoose'
import dotenv from 'dotenv';
// import nextConfig from nextConfig;

dotenv.config();

const dbConnect = () => {
    if(mongoose.connection.readyState >= 1){
        return
    }
    
    mongoose.set("strictQuery", false);

    mongoose.connect(process.env.DB_URI)
        .then(() => console.log("mongoose is connected"))
        .catch((err) => console.log(err))
};


export default dbConnect

