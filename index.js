const express = require('express')
const mongoose = require('mongoose')
const CompanyRoutes = require('./routes/routes')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/uploads',express.static("uploads"))
mongoose.connect("mongodb+srv://samarthintern:samarth123@company.eltribo.mongodb.net/").then(()=>{
    console.log("MONGODB CONNECTED..!!")
})
app.use('/',CompanyRoutes)


app.listen(3000, () => {
    console.log("SERVER STARTED...!!")
})