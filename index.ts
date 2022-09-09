import express from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/check", (req,res) => {
    res.send('<h1>All OK</h1>');
})

app.listen(3000,() => {
    console.log('server is running');
})