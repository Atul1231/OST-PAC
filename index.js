const express = require('express');

const app = express();

console.log('Hello world');

app.listen(3000,()=>{
    console.log('listening port 3000')
})