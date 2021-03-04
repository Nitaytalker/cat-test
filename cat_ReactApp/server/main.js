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
    // console.log(req.params);
    dbModule.getById(req.params.id).then(data=>{
        res.send(data)
    })
})

app.get('/catapi/random',(req,res)=>{
    console.log("....");
    dbModule.getRandomCat().then(data=>{
        res.send(data)
    })
})
app.post('/', (req, res) => {
    // console.log(req.body);
    dbModule.addUser(req.body).then(data => {
        res.send({
            "data": data
        })
    })
})

app.delete('/:id',(req,res)=>{
    // console.log(req.params.id);
    dbModule.deleteById(req.params.id).then(data=>{
        res.send(data)
    })
})


app.listen(3000,()=>{console.log("server run....");})