const express = require('express')
const app = express()


const ejs = require("ejs")
const expressLayout = require("express-ejs-layouts")
const path=require('path')
const PORT = process.env.PORT || 3000

app.use(express.static('public'))



//set template engine
app.use(expressLayout)
app.set("views", path.join(__dirname, 'resources/views'))
app.set("view engine","ejs")

app.get('/', (req, res) => {
    res.render("home")
})

app.get('/cart',(req,res)=>{

    res.render('coustmers/cart')
})

app.listen(PORT, (req, res) => {
    console.log(`Express App Running on ${PORT}`)
})