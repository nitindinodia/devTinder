// 1..

// const express = require('express');

// const app = express();

// app.use('/', (req, res)=>{
//     res.send('hi');
// } )

// app.use('/test', (req, res)=>{
//     res.send('i am sending response');
// } )

// app.listen(8080, ()=>{
//     console.log('server listeningggg');
// });


// 2..

// const express = require('express');

// const app = express();

// app.use('/test', (req, res)=>{
//     res.send('test');
// } )

// app.use('/', (req, res)=>{
//     res.send('/ wala route');
// } )

// app.listen(8080, ()=>{
//     console.log('server listeningggg');
// });

// 3..

// const express = require('express');

// const app = express();

// app.use('/test', (req, res)=>{
//     res.send('hi');
// } )

// app.use('/test/2', (req, res)=>{
//     res.send('i am sending response');
// } )

// app.listen(8080, ()=>{
//     console.log('server listeningggg');
// });

// 4..

// const express = require('express');

// const app = express();

// app.use('/test/2', (req, res)=>{
//     res.send('i am sending response');
// } )

// app.use('/test', (req, res)=>{
//     res.send('hi');
// } )

// app.listen(8080, ()=>{
//     console.log('server listeningggg');
// });

// 5..

// const express = require('express');

// const app = express();

// app.use('/test/2', (req, res)=>{
//     res.send('i am sending response');
// } )

// app.use('/test', (req, res)=>{
//     res.send('hi');
// } )

// app.use('/', (req, res)=>{
//     res.send('yo yo');
// } )

// app.listen(8080, ()=>{
//     console.log('server listeningggg');
// });

// 6..

// const express = require('express');

// const app = express();

// app.use('/test/2', (req, res)=>{
//     res.send('i am sending response');
// } )

// app.post('/test', (req, res)=>{
//     res.send('this is post request');
// } )

// app.get('/test', (req, res)=>{
//     res.send('this is get request');
// } )

// app.delete('/test', (req, res)=>{
//     res.send('this is delete request');
// } )

// app.use('/test', (req, res)=>{
//     res.send('hi');
// } )

// app.use('/ghgh', (req, res)=>{
//     res.send('yo yo');
// } )

// app.listen(8080, ()=>{
//     console.log('server listeningggg');
// });

// 7..

// const express = require('express');

// const app = express();

// app.use('/test/2', (req, res)=>{
//     res.send('i am sending response');
// } )

// app.use('/test', (req, res)=>{
//     res.send('hahhaahahahaha');
// } )

// app.post('/test', (req, res)=>{
//     res.send('this is post request');
// } )

// app.get('/test', (req, res)=>{
//     res.send('this is get request');
// } )

// app.delete('/test', (req, res)=>{
//     res.send('this is delete request');
// } )

// app.use('/ghgh', (req, res)=>{
//     res.send('yo yo');
// } )

// app.listen(8080, ()=>{
//     console.log('server listeningggg');
// });


// 8..

// const express = require('express');

// const app = express();

// app.get('/user', (req, res)=>{
//     console.log(req.query);
//     res.send({firstName: 'Akshay', lastName: 'Khanna'});
// })

// app.listen(8080, ()=>{
//     console.log('server listeningggg');
// });

// 9..

const express = require('express');

const app = express();

app.get('/user/:userId/:name', (req, res)=>{
    console.log(req.params);
    res.send({firstName: 'Akshay', lastName: 'Khanna'});
})

app.listen(8080, ()=>{
    console.log('server listeningggg');
});