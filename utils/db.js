import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

export default async () => {
  const conn = await mongoose
    .connect(process.env.monoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(console.log(`MongoDB connected: ${conn.connection.host}`))
    .catch((err) => {
      console.log(`Error: ${error.message}`);
      process.exit(1);
    });
};
