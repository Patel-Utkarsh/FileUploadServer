const express = require("express");
const fileUpload = require("express-fileupload");
const upload = require("./Controllers/uploadAtServer");
const dbConnect = require("./config/database");

const app = express();

app.use(express.json());
app.use(fileUpload());
app.use(upload);

dbConnect();
app.listen(3000,()=>{
    console.log('app has started');
})