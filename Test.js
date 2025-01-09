const express = require("express"); 

const app = express(); 

 

app.get("/", (req, res) => { 

    res.send("Hello, World from Node.js!"); 

}); 

 

const port = process.env.PORT || 3000; 

app.listen(port, () => { 

    console.log(`Server running at http://localhost:${port}/`); 

}); 