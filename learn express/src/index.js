const express = require("express");
const app = express();
// const quotes = require("./quotes.json");
const noteRouter = require("./routes/noteRoutes");
const userRouter = require("./routes/userRoutes");
const mongoose = require("mongoose");

app.use("/users", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});

mongoose.connect("mongodb+srv://AbdulRehman:AbdulRehman@cluster0.s7ricmi.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    app.listen(5000, () => {
        console.log("server started on 5000");
      });

})
.catch(()=>{
    console.log('error')
});







// app.get('/quote', (req,res)=>{
//     res.status(200).json(quotes)
// })

// app.get('/random', (req,res)=>{

//     let index = Math.floor(Math.random()*quotes.length);
//     let quote = quotes[index];
//     res.status(200).json(quote);

// })
