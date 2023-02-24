const express = require('express')
const app = express()
const port = 3000;


//this is only so that postman can read url (for POST req... params are in the url)
app.use(express.urlencoded({
    extended: true
}));

app.get('/foo', (req, res) => {

    res.json({"foo":'bar'})
});

app.post('/bar', (req, res)=> {
    let body = req.body;
    console.log('incoming post request: ', req.body.foo)
    res.send(req.body.foo)
});


app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})