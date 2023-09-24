import mongoose from "mongoose"

export const mongoDBConnection = async () => {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI); 
    console.log("Connected");
  } catch (error) {
    console.log("Error: " + error.message); 
  }
}