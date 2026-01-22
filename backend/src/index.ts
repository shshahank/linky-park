import express from "express";
import cors from "cors";
import v1Routes from "./routes/index";
import { PORT } from "./config";
import connectDB from "./database";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connect to DB
connectDB();

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "Welcome to linky-park",
  });
});

// Routes
app.use("/api/v1", v1Routes);

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({
    msg: "Route not found",
  });
});

// Global error handler
app.use((err: any, req: any, res: any, next: any) => {
  console.error("Global error:", err);
  res.status(500).json({
    msg: "Something went wrong",
  });
});

app.listen(PORT, () => {
  console.log("linky-park app listening on port : " + PORT);
});
