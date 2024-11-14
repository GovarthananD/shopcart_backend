import mongoose from "mongoose";

const DB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database Connected");
    }catch(error){
        console.log("Database not connected", error);
    }
}

export default DB;