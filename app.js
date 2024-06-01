// const dotenv = require('dotenv');
// dotenv.config({ path: "./config.env"});

const express = require('express');
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();

const DATABASE = "mongodb+srv://manishkaswan88:9gUTpj4Y2LOwwIC6@cluster0.hglx7nh.mongodb.net/?retryWrites=true&w=majority";
const BASE_URL = "https://glittery-phoenix-690207.netlify.app";
const PORT = process.env.PORT;

app.use(cors({
  origin: `${BASE_URL}`,  
  credentials: true,  
}));



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

mongoose.connect(DATABASE)
.then(() => {
    console.log("DB is connected");
})
.catch((err) => {
    console.log(err);
});

app.use(express.json());
app.use(cookieParser());

const userRouter = require("./routers/userRouter.js");
const planRouter = require("./routers/planRouter.js");
const reviewRouter = require("./routers/reviewRuoter.js");
const bookingRouter = require("./routers/bookingRouter.js");


app.use("/user" , userRouter); 
app.use("/plan" , planRouter);
app.use("/review" , reviewRouter);
app.use("/booking" , bookingRouter);

module.exports = app;