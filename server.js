/*
 * CoppelApp v1.0.0.
 * Developed by Hipsterna.
 * All rights reserved 2015-2016.
*/

// Get dependenses.

var express = require('express');
var app = express();
var mongojs =  require('mongojs');
var db = mongojs('coppel', ['products']);

// Get products.

app.use(express.static(__dirname + "/public"));

app.get('/products', function (req, res)
{
    db.products.find(function (err, docs) 
    {
        res.json(docs);
    });
});

app.listen(3000);

console.log("Server running on port 3000.");