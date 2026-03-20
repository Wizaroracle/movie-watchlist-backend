import express from "express";
import { config } from "dotenv";
import { connectDB, disconnectDB } from "./config/db.js";

//import routes
import movieRoutes from "./routes/movieRoutes.js";

config();
connectDB();
const app = express();
const PORT = 5001;

//API routes
app.use("/movies", movieRoutes);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
