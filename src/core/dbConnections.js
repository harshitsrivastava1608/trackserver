require('dotenv').config()
const mongoose = require("mongoose");

//use any mongo uri

mongoose.connect(
    `${process.env.DB_URI}`,
   {useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ Connection error:", err));

