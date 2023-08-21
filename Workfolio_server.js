var http = require('http');
var url = require('url');
var fs = require('fs');
var myModule = require('./myModule')
var mySess = require('./mySession')
querystring = require('querystring');
var path = require('path');
var url = require('url');
var imageDir = './images/';
var cssDir = './css/';
var javaScriptDir = './javascript/';
var htmlDir = './html/';

http.createServer(function (req, res) {
    var body = '';
    var s;

    //login
    if (req.url == "/Login" || req.url=="/login") {
        console.log(req.method+ "Login"); 
        if (req.method !== 'POST'){
            fs.readFile("Login.html", function (err, data) {
                if (err) {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    return res.end("404 not found");
                }
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                return res.end();
            });
        } else {
            let body = '';
            //read chunks of POST data
            req.on('data', chunk => {
                body += chunk.toString();
            });

            console.log(body);

            // when complete POST data is received
            req.on('end', () => {
                // use parse() method
                body = querystring.parse(body);
                // Authonticate user credentials.
                myModule.authenticateUser(res, body, mySess, myModule.postAuthentication);
            });

        }
    } else if (req.url == "/signup") {
        console.log(req.method+ "signup");
        if (req.method !== 'POST') {
            console.log("hey its not post signup");
            fs.readFile("signup.html", function (err, data) {
                if (err) {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    return res.end("404 not found");
                }
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                return res.end();
            });
        } else { 
            console.log("hey POST");
            let body = '';
            //read chunks of POST data
            req.on('data', chunk => {
                body += chunk.toString();
            });

            // when complete POST data is received
            req.on('end', () => {
                // use parse() method
                body = querystring.parse(body);
                // Authonticate user credentials.
                myModule.addUser(res, body, mySess, myModule.postAuthentication);
            });

        }

    //This code displays the various webpages for the user
    } else if (req.url == "/graphicdesigning" || req.url=="/graphicdesigning") {
        
        let name = "Graphical_Designing.html"
        let tag = "Graphic Designers"
        myModule.pagedisplay(res, mySess ,name, tag);
    
    }
    else if (req.url == "/business" || req.url=="/Business") {

        let name = "Business.html"
        let tag = "Business Analysts"
        myModule.pagedisplay(res, mySess , name, tag );
    }
    else if (req.url == "/programming" || req.url=="/Programming") {
    
        let name = "Programming.html"
        let tag = "Programmers"
        myModule.pagedisplay(res, mySess , name , tag );
    
    }
    else if (req.url == "/technical" || req.url=="/Technical") {
        
        let name = "Technical.html"
        let tag = "Technical Specialists"
        myModule.pagedisplay(res, mySess , name , tag );

    }
    else if (req.url == "/marketing" || req.url=="/Marketing") {
        
        let name = "Marketing.html"
        let tag = "Marketeers"
        myModule.pagedisplay(res, mySess , name , tag);
    
    }
    else if(req.url == "/specificservice" || req.url == "/Specificservice"){

        fs.readFile("specific_service1.html", function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }
    else if (req.url == "/Profile" || req.url == "/profile") {

        console.log("yes")  
        myModule.navigateToUserProfile(res , mySess);
        //myModule.navigateTosub(res,mySess);  
       
    }
    else if(req.url == "/landingpage" || req.url == "/Landingpage"){
        myModule.navigateToHome(res);
    }

    else if(req.url == "/checkout" || req.url == "/Checkout"){

        fs.readFile("checkout.html" , function(err, data){
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        })
    }
    else if(req.url == "/checkout" || req.url == "/Checkout"){
        myModule.addToCart(res, body , mySess);

            }
    else {
        // Login page.
        myModule.navigateToLogin(res);
    }
}).listen(8080);


