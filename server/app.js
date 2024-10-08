const express = require('express');
const connectToMongo = require('./db/conn');
const app = express();

app.use(express.json());
connectToMongo();

app.use("/api", require('./routers/api'));
app.use("/frontendapi", require('./routers/frontendAPI'));

app.listen(5000, ()=>{
    console.log("Your serveer is running on port 5000");
})