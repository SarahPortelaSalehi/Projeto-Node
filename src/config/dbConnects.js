import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Callidus:123@callidus.f0pwyre.mongodb.net/Callidus");

let db = mongoose.connection;

export default db;