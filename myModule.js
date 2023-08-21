var mysql = require('mysql');
var fs = require('fs');
const { setMySession, getMySession } = require('./mySession');
var con;

exports.connectToDB = function () {
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password", 
        database: "db2"
    });
    return con;
};

exports.postAuthentication = function (res, mySess, email, body) {
    if (email != -1 && email != "" && email !== undefined) {
        mySess.setMySession(body.username);
        mySess.setUserIdSession(email);
        s = mySess.getMySession();
        if (s.userName != "" && s.userName !== undefined) {
            // Redirect to the Home page.
            fs.readFile("landingpage.html", function (err, data) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                return res.end();
            });
        }
    }
}

exports.Login = function (res) {   // to display error message if there is any.
    fs.readFile("Login.html", function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
};

exports.logout = function (res) {
    fs.readFile("Login.html", function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        if (con != undefined && con != "") {
            con.destroy();
        }
        return res.end();
    });
};

exports.navigateToHome = function (res) {
    
    fs.readFile("landingpage.html", function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
};

exports.navigateToLogin = function (res) {
    fs.readFile("Login.html", function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
};

exports.navigateToSignup = function (res) {
    fs.readFile("signup.html", function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
};

exports.navigateToTitle = function (res, empObj, mySess) {
    fs.readFile("title.html", function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        // #################### The student need to add his/her code here.
        return res.end();
    });
};


exports.authenticateUser = function (res, body, mySess, myCallback) {
    var Username = body.username;
    var Password = body.password;
    // Connect to the database.
    con = this.connectToDB();
    con.connect(function (err) {
        if (err) throw err;
        // Get employee record.
        var sql = "SELECT * from users WHERE email = '" + Username + "' AND password = '" + Password + "'";
        con.query(sql, function (err, result) {
            if (err) throw err;
            if (result !== undefined && result.length > 0) {
                myCallback(res, mySess, result[0].email, body);
            }
            else {
                // show error message on the login page.
                var message = "<script>document.getElementById(\"demo_error_message\").innerHTML = \"You have entered an incorrect username or password!\";</script> ";
                fs.readFile("Login.html", function (err, data) {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(data);
                    return res.end(message);
                });
            }
        });
    });
    
};

exports.addToCart = function (res, body, mySess) {
    var sid = body.trial;
    s = mySess.getMySession();
    con = this.connectToDB();
    con.connect(function (err) {
        if (err) throw err;
        console.log(sid);
        var sql_bs = "INSERT INTO bought_services values (" + sid + " , '" + s.userName + "')";
        con.query(sql_bs, function (err, result) {
            if (err) throw err;
            console.log(result);
            console.log("The values have been inserted suceesfully.");
        });
        fs.readFile("checkout.html" , function(err, data){
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        })
    });    
};

//Showing business page

exports.pagedisplay = function(res , mySess , name , tag){

    //connecting to the database

    con = this.connectToDB();
    s = mySess.getMySession();
    con.connect(function(err){
        if(err) throw err;

        var sql = "SELECT country from users WHERE email = '"+ s.userName + "' ";
        console.log("Selected the country");
        console.log(s.userName);
        
        con.query(sql , function(err, result){
        
            if(err) throw err;
            if(result !== undefined && result.length > 0 ){

                var message = "<script> document.getElementById(\"result2\").innerHTML =  ' Showing results for " + tag + " in  " + result[0].country +  " ' </script>";
                fs.readFile(name, function (err, data) {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(data);
                    return res.end(message);
                });
            }
        });    
    });
}

exports.navigateToUserProfile = function (res, mySess) {
    con = this.connectToDB();
    s = mySess.getMySession();
   
    console.log("Connected");
    console.log("Selected the user");
    var sql = "SELECT * from users WHERE email = '" + s.userName  + "' ";
    var sql2 = "select ser.* , u.email from services ser join subscribed_services s on ser.sid = s.s_id join users u on u.email = s.email_id where s.email_id = '" + s.userName + "'";

    con.query(sql2 , function(err, result){
        con.query(sql , function(err, result1){
            console.log(result)
            console.log(result1[0])
            console.log(result[0].descr)
            fs.readFile("my_profile.html", function (err, data) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.write("<script>");
                res.write("document.getElementById(\"user-name\").innerHTML = '" + result1[0].name + "';" + "\n");
                res.write("document.getElementById(\"user-email\").innerHTML = '" + result1[0].email + "';" + "\n");
                res.write("document.getElementById(\"user-country\").innerHTML = '" + result1[0].country + "';" + "\n");


                
                res.write("document.getElementById(\"sub-name1\").innerHTML = '" + result[0].name + "';" + "\n");
                res.write("document.getElementById(\"sub-title1\").innerHTML = '" + result[0].category + "';" + "\n");
                res.write("document.getElementById(\"sub-descr1\").innerHTML = '" + result[0].descr + "';" + "\n");
                res.write("document.getElementById(\"sub-price1\").innerHTML = '" + result[0].package + " " + result[0].price + " ';" + "\n");



                res.write("document.getElementById(\"sub-name2\").innerHTML = '" + result[1].name + "';" + "\n");
                res.write("document.getElementById(\"sub-title2\").innerHTML = '" + result[1].category + "';" + "\n");
                res.write("document.getElementById(\"sub-descr2\").innerHTML = '" + result[1].descr + "';" + "\n");
                res.write("document.getElementById(\"sub-price2\").innerHTML = '" + result[1].package + " " + result[1].price + " ';" + "\n");
                
                res.write("</script>");
                return res.end();
            });
        })
    })
};



exports.addUser = function (res, body, mySess, myCallback) {
    var username = body.username;
    var password = body.password;
    var name = body.name;
    var country = body.country;
    var cpassword = body.cpassword;
    console.log("The inserted values are:")
    console.log(username);
    console.log(password);
    console.log(name);
    console.log(country);
    console.log(cpassword);
    // Connect to the database.
    con = this.connectToDB();
    con.connect(function (err) {
        if (err) throw err;
        // Get employee record.
        var sql = "INSERT into users values ('" + name + "','" + username + "','" + country + "','" + password + "')";
       // var sql1 = "SELECT * from users where email= '" + email + "'";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result);
            console.log("The values have been inserted suceesfully.");
        });

        var sql2 = "SELECT * from users WHERE email = '" + username + "' AND password = '" + password + "'";
        con.query(sql2, function (err, result) {
            if (err) throw err;
            if (result !== undefined && result.length > 0) {
                myCallback(res, mySess, result[0].email, body); 
            }
            else {
                // show error message on the login page.
                var message = "<script>document.getElementById(\"error\").innerHTML = \"You have entered an incorrect username or password!\";</script> ";
                fs.readFile("signup.html", function (err, data) {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(data);
                    return res.end(message);
                });
            }
        });
    });

};

