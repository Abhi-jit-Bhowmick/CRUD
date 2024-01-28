const express = require("express");
const app = express();
const PORT = 8082;

require("dotenv").config()

//! Importing USER DATA Router
const userRoutes = require("./routes/User.route");
const currenciesRoutes = require("./routes/Currencies.Route");
const blogRoutes = require("./routes/Blog.Routes")
const { verifyAuth } = require("./middlewares/User.miidleware");
const mongoose = require("mongoose");




const DB_URI = `mongodb://localhost:27017/temp`;

mongoose
    .connect(DB_URI)
    .then(() => console.log("DB Connected..."))
    .catch(error => console.log("Error in Connecting DB ::", error))
//





app.use(express.json())



// app.use(verifyAuth)


// USER DATA --->
app.use("/", userRoutes)




// Currencies
app.use("/", currenciesRoutes)





// Mongo DetabAse
app.use("/blogs", blogRoutes)


app.listen(PORT, () => {
    console.log("Listening at port ...", PORT)
})