import express from "express"

const app = express();
const port = process.env.PORT || 3005;

app.get("/", (req, res) => {
    res.json({message: "hello password generate app"})
});

app.listen(port, () => {
    console.log(`server started on port:${port}`);
});