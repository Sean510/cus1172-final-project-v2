var express = require("express");
var app = express();
const PORT = process.env.PORT || 5000

var api_routes = require('./api_routes.js');
app.use('/api', api_routes);



// Start server
app.listen(PORT, function() {
    
    console.log("Server is running")
    
});
