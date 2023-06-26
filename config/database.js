import mongoose from "mongoose";

async function  connect_db(){
    try {
        let link = process.env.MONGO_URI;
        await mongoose.connect(link);
        console.log('Database connect true');
      } catch (error) {
        console.log(error);
      }
}
connect_db()