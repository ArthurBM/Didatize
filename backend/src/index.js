const express = require('express')

const app = express()

app.get('/', (req, res) =>{
    return res.json({
        evento: 'Hacking help',
        alunos: ['Arthur', 'Pedro', 'Guilherme']
    })
});

app.listen(3333);