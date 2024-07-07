import express from 'express';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
    }
);

const Port = 3000 || process.env.PORT;

app.listen(Port , ()=>{
    console.log(`Server is Listening at Port ${Port}` )
})