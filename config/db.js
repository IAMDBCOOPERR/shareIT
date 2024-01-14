const mongoose = require("mongoose")

function connectDB() {
 // Database connection 🥳
 const url = process.env.h
 mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

 const connection = mongoose.connection

 connection.on("error", (err) => {
  console.error("Connection failed ☹️☹️☹️☹️", err)
 })

 connection.once("open", () => {
  console.log("Database connected 🥳🥳🥳🥳")
 })
}

module.exports = connectDB
