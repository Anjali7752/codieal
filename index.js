const express = require('express');
const app = express();
const port = 8000;


app.listen(port, function(err){
    if(err){
        console.log(`Error is running on port : ${err}`);
    }

    console.log(`Server is runnning on port : ${port}`)
});