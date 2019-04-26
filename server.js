// init server framework
const express =  require('express');
const app = express();

const fakeDatabase = 
{
    'corn': {soil: 'dark', color: 'yellow'},
    'grapes': {soil: 'light', color: 'green'},
    'apples': {soil: 'medium', color: 'red'}
}
app.get('/', (req,res) => { // home page
    res.sendFile(__dirname + '/' + 'index.html')
})

app.get('/home', (req,res) => {
    res.sendFile(__dirname + '/' + 'home.html')
})

app.get('/details/:cropName', (req,res) => {  
    const cName = req.params.cropName  
    const val = fakeDatabase[cName]
    if (val) {
        res.send(val)
    } else {
        res.send({})
    }
})

app.listen(3000, () => { // set server to listen on port 3000
    console.log('Server started at http://localhost:3000/');
})
