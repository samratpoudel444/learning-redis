const express= require("express");
const authRouter = require("./routes/authRoute");
const { errorMiddleware } = require("./middleware/errorMiddleware");
const app= express();
const dotenv= require("dotenv").config();

const port= 3000;

app.use(express.json());
app.use('/api/user', authRouter);
app.use(errorMiddleware);


app.listen(port, ()=>
{
    console.log(`server started on port: ${port}` );
})


