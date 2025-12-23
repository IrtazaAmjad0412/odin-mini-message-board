import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import messageRouter from "./routes/messages.js";

dotenv.config();

const app = express();
const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(_dirname, "./views"));
app.set("view engine", "ejs");

app.use("/", messageRouter);

const PORT = 3000;
app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Express App launched successfully! Server running on port ${PORT}.`);
});
