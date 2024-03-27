const express = require('express')
const app = express()

const cors = require('cors');


const port = 3006;


app.use(cors());
app.get('/',(req,res) =>{
    res.send("Home Page ")
})



app.get('/api/users', (req, res) => {
    res.send([
        {
            name: "Person 1",
            Branch: "CSE",
            Roll: "21BCP379"
        },
        {
            name: "Person 2",
            Branch: "CSE",
            Roll: "21BCP200"
        }
    ])
});

app.get('/api/users/:id',)
app.listen(port,()=>{
    console.log(`Server is Listening ${port}`)
})