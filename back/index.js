let express = require("express")
let app = express()
let cors = require("cors")
let bodyParser = require("body-parser")
const mongoose = require("mongoose")
const { Schema } = require("mongoose")
app.use(cors())
app.use(bodyParser.json())
require('dotenv').config()
let port = process.env.PORT
app.use(express.json())

// Schemas
const WatchesSchema = new Schema({
    name: String,
    price: Number,
    image: String,  
});
const Watches = mongoose.model("Watches",WatchesSchema)

app.get("/api/watches",async(req,res)=>{
    let watches = await Watches.find()
    if(Watches.length>0){
        res.send(watches)
    }else{
        res.send("Data not found")
    }
})

app.get("/api/watches/:id",async(req,res)=>{
    let { id } = req.params
    let findedWatch = await Watches.findById(id)
    if(findedWatch){
        res.send(findedWatch)
    }else{
        res.send("Data not found")
    }
  })
  app.delete("/api/watches/:id",async(req,res)=>{
    let { id } = req.params
    let deletedWatch = await Watches.findByIdAndDelete(id)
    if(deletedWatch){
        res.send(deletedWatch)
    }else{
        res.send("Data not found")
    }
  })
  app.post("/api/watches",async(req,res)=>{
    let { name, price, image } = req.body
    let newData={}
    if(name){
        newData.name=name
    }
    if(price){
        newData.price=price
    }
    if(image){
        newData.image=image
    }
    let newWatch = new Watches(newData)
  
    let savedWatch = await newWatch.save()
    res.send(savedWatch)
  
  })
  

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

mongoose.connect(process.env.DB_CONNECTION_KEY.replace("Aa1234",process.env.DB_PASSWORD))
.then(() => console.log('Connected!'));