import express from "express";
import ip from "ip";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.SERVER_PORT || 3000;
const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "UP" });
});
// console.log(process.env);
// SERVER_PORT=5000 npm run start:prod
app.listen(PORT, (req, res) => {
  console.log(`🟢 sever is running on ${ip.address()} : ${PORT}`);
});
