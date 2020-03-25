const express = require('express');

const app = express();

app.get('/', (request, response)=> {
    return response.json({
        evento: 'Semana 11.0',
        aluno: 'Lorenzo' 
    });
});

app.listen(3333)
