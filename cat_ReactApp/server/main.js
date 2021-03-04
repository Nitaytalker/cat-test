const express = require("express")
const app = express()
const cors = require('cors');
const dbModule = require('./dbmodule')


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    dbModule.getAll().then(data => {
        res.send(data);
    })
})

app.get('/:id', (req, res) => {
    dbModule.getById(req.params.id).then(data=>{
        res.send(data)
    })
})

app.get('/catapi/random',(req,res)=>{
    dbModule.getRandomCat().then(data=>{
        res.send(data)
    })
})
app.post('/', (req, res) => {
    dbModule.addUser(req.body).then(data => {
        res.send({
            "data": data
        })
    })
})

app.delete('/:id',(req,res)=>{
    dbModule.deleteById(req.params.id).then(data=>{
        res.send(data)
    })
})


app.listen(3000,()=>{console.log("server run....");})