const express = require('express')
const cors=require('cors')

const app= express()
app.use(cors())
app.use(express.json())

app.get('/cartas',(req,res)=>{
    res.json({
        cartas:[{
            mazo:"Corazones",
            descripcion:"K",
            valor:"10"
        },{
            mazo:"Corazones",
            descripcion:"7",
            valor:"7"    
        }],
        id: 1
    })
})

app.post('/carta',(req,res)=>{
    console.log(req.body)
    res.json({
        mensaje:"Post realizado con éxito"
    })
})

app.listen(8080,()=>console.log("En línea"))
