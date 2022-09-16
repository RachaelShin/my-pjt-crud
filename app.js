const express = require("express");
const app = express();

const indexRouter = require("./routes");
const signInRouter = require("./routes/user/signin");
const signUpRouter = require("./routes/user/signup");

const dotenv = require("dotenv").config();
const path = require("path");

app.set("port", process.env.PORT || 8000);
const PORT = app.get("port");

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "/public")));

app.use("/", indexRouter);
app.use("/signin", signInRouter);
app.use("/signup", signUpRouter);
app.use((req, res, next) => {
  res.status(404).render("404");
});

app.listen(PORT, () => {
  console.log(`${PORT}번에서 서버대기중`);
});
