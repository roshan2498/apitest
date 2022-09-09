import express from "express";
import cors from "cors";
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/check", (req,res) => {
    res.send('<h1>All OK</h1>');
})

app.listen(port,() => {
    console.log('server is running');
})