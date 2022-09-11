import express from "express";
import ip from "ip";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import HttpStatus from "./controller/patient.controller.js";
import Response from "./domain/response.js";
import logger from "./utils/logger.js";

const PORT = process.env.SERVER_PORT || 3000;
const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    new Response(
      HttpStatus.OK.code,
      HttpStatus.OK.status,
      "Patient API v0.1.0 - All Systems go",
      {
        patients: { name: "zizimoos" },
      }
    )
  );
});
// console.log(process.env);
// SERVER_PORT=5000 npm run start:prod
app.listen(PORT, (req, res) => {
  logger.info(`🟢 sever is running on ${ip.address()} : ${PORT}`);
});
