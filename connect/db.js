const mongoose=require("mongoose")
require('dotenv').config()
const userConnect=mongoose.connect(process.env.URL)

module.exports={
    userConnect
}


