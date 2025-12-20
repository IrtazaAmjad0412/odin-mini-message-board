import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import indexRouter from "../routes/indexRouter.js";

const app = express();
const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

app.set("views", path.join(_dirname, "../views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Express App launched successfully! Server running on port ${PORT}.`);
});
