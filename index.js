const express= require('express')
const app= express()
const bodyParser = require('body-parser')

app.use(meujson())
app.use(bodyParser.json())


function meujson(){
    return (req,res,next)=>{
        console.log('Antes de tudo:Meu middleware...')
        next()
    }
}

app.get('/blabla/:valor', (req, res,next)=>{
    console.log('Func 0')
    res.status(200)
    next()
})
app.post('/blabla/:valor', (req,res,next)=>{
    console.log('Func 1')
    res.status(200).send('<h1>Meu Backend1 - </h1>'+ req.body.nome)
})
app.post('/blabla/:valor', (req, res)=>{
    console.log('Func 2')
    res.status(200)
})
app.listen(3000,()=>{
    console.log('Backend executando....')
})