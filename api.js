const path = require('path');
const express = require('express');
const app = express();

const publicDirectoryPath = path.join(__dirname,'../public');
console.log(publicDirectoryPath)
app.use(express.static('public'))

app.get('',(req,res) =>{
   res.send("<h1>It's home page</h1>");
  });


  app.get('/help',(req,res) =>{
 
   res.send(
       [
           {"name":"Manvitha"}
        ]
   );
  });

  app.get('/about',(req,res) => {
   
    res.send("<h1>About</h1>")
   
  })


  app.listen(3000, () =>{
    console.log('Listening on port 3000')
  });

  module.exports = app
  