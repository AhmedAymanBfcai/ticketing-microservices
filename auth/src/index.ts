import express from 'express';
import { json } from 'body-parser';

const app = express();
app.use(json());

app.get('/api/users/currentuser', (req, res) => {
    res.send("Hi There!")
})

app.get('/', (req, res) => {
    console.log(req.url)
    res.send("Hi");
})

app.listen(3000, () => {
    console.log("Server is up on port 3000!!")
})