const express = require("express");
const app = express();
var cors = require('cors')
const dbConnection = require("./database/dbConnection");
const authRoute = require("./routes/authRoute")
const plotRoute = require("./routes/plotRoute")

dbConnection();

// _________________________Middleware______________________________
app.use(express.json());
app.use(cors())

app.use("/api/auth/", authRoute)
app.use("/api/plot/", plotRoute)

app.listen(5000, () => {
    console.log("Server is running on port 5000");
  });
  
