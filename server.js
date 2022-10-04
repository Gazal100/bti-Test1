/*************************************************************************
* BTI325– Test 1
* I declare that this test is my own work in accordance with Seneca Academic
Policy. No part of this test has been copied manually or electronically from any
other source
* (including 3rd party web sites) or distributed to other students.
*
* Name: Gazal Garg     Student ID: 107140212      Date: October 04, 2022
*
* Test’s URL (from Cyclic) : https://sore-jade-bear-cape.cyclic.app/
*
*************************************************************************/

var express = require("express");
var path = require("path");
var test = express();

var HTTP_PORT = process.env.PORT || 8080;

function onHttpStart(){
    console.log("Express http server listening on " + HTTP_PORT);
}

test.get("/", function(req, res){
    let resText = "<h2>Declaration</h2>";
    resText += "<p>I declare that this test is my own work in accordance with Seneca Academic Policy. No part of this test has been copied manually or electronically from any other source.<br></p>";
    resText += "Name: <mark><b>Gazal Garg</b></mark><br>"
    resText += "<br>Student Number: <mark><b>107140212</b></mark><br>"
    resText += "<br><a href = '/test1'> Go to Test1 </a> <br>"; 
    res.send(resText);
});


test.get("/test1", function(req, res){
    res.sendFile(path.join(__dirname, "/pages/test1.html"));
});

test.listen(HTTP_PORT, onHttpStart);