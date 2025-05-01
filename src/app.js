const express = require('express');

const app = express();

// app.use( (req, res)=>{
//     res.send('i am sending response');
// } )

app.use('/test', (req, res)=>{
    res.send('i am sending response');
} )

app.listen(8080, ()=>{
    console.log('server listeningggg');
});