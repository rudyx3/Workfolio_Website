var mysql = require('mysql');
var fs = require('fs');
var con;

// This method is used to connect to the Database
// @author Dr. Haitham Yaish
// @date 11 June 2023
// return con
exports.connectToDB = function () {
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "admin", // provide your own password.
        database: "csit128_example"
    });
    return con;
};
// The purpose of this method is to create the sessions and authorize the user.
// @author Dr. Haitham Yaish
// @date 11 June 2023
// @param res
// @param mySess
// @param empId
// body
exports.preAuthentication = function (res, mySess, empId, body) {
    if (empId != -1 && empId != "" && empId !== undefined) {
        mySess.setMySession(body.username);
        mySess.setUserIdSession(empId);
        s = mySess.getMySession();
        if (s.userName != "" && s.userName !== undefined) {
            // Redirect to the Home page.
            fs.readFile("homepage.html", function (err, data) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                return res.end();
            });
        }
    }
}


// This method is used to login the user in the web application.
// @author Dr. Haitham Yaish
// @date 11 June 2023
// @param res
exports.login = function (res) {   // to display error message if there is any.
    fs.readFile("login.html", function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
};

// This method is used to logout the user from the web application.
// @author Dr. Haitham Yaish
// @date 11 June 2023
// @param res
exports.logout = function (res) {
    fs.readFile("login.html", function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        con.destroy();
        return res.end();
    });
};

// This method navigates the user to the Home page.
// @author Dr. Haitham Yaish
// @param res
exports.navigateToHome = function (res) {
    fs.readFile("homepage.html", function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
};

// This method navigates the user to the UserProfile page.
// @author Dr. Haitham Yaish
// @date 11 June 2023
// @param res
exports.navigateToUserProfile = function (res, empObj) {
    fs.readFile("userprofile.html", function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.write("<script>");
        res.write("document.getElementById(\"emp_id_display\").innerHTML = '" + empObj[0].emp_id + "';" + "\n");        
        res.write("document.getElementById(\"emp_f_name_display\").innerHTML = '" + empObj[0].emp_f_name + "';" + "\n");        
        res.write("document.getElementById(\"emp_l_name_display\").innerHTML = '" + empObj[0].emp_l_name + "';" + "\n");        
        res.write("document.getElementById(\"emp_email_display\").innerHTML = '" + empObj[0].emp_email + "';" + "\n");        
        res.write("document.getElementById(\"emp_salary_display\").innerHTML = '" + empObj[0].emp_salary + "';" + "\n");        
        res.write("document.getElementById(\"emp_job_type_display\").innerHTML = '" + empObj[0].emp_job_type + "';" + "\n");     
        res.write("document.getElementById(\"emp_gender_display\").innerHTML = '" + empObj[0].emp_gender + "';" + "\n");     
        res.write("document.getElementById(\"emp_username_display\").innerHTML = '" + empObj[0].emp_username + "';" + "\n");    
        res.write("</script>");
        return res.end();
    });
};

// This method authenticates user credentials
// @author Dr. Haitham Yaish
// @date 11 June 2023
// @param empUsername
// @param empPassword
// @param myCallback
exports.authenticateUser = function (res, body, mySess, myCallback) {
    var empUsername = body.username;
    var empPassword = body.password;
    // Connect to the database.
    con = this.connectToDB();
    con.connect(function (err) {
        if (err) throw err;
        // Get employee record.
        var sql = "SELECT * from employee WHERE emp_username = '" + empUsername + "' AND emp_password = '" + empPassword + "'";
        con.query(sql, function (err, result) {
            if (err) throw err;
            if (result !== undefined && result.length > 0) {
                myCallback(res, mySess, result[0].emp_id, body);
            }
            else {
                // show error message on the login page.
                    var message = "<script>document.getElementById(\"demo_error_message\").innerHTML = \"You have entered an incorrect username or password!\";</script> ";
                    fs.readFile("login.html", function (err, data) {
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        res.write(data);
                        return res.end(message);                       
                    });
            }      
     });
    });
};

// This method gets an employee record
// @author Dr. Haitham Yaish
// @date 11 June 2023
// @param res
// @param empId
// @param myCallback
exports.getEmployee = function (res, mySess, myCallback) {    
    var sql = "SELECT * from employee WHERE emp_id = " + mySess.empId;
           con.query(sql, function (err, result) {
                if (err) throw err;
                if (result !== undefined && result.length > 0) {
                    myCallback(res, result); // result - employee object
                }
            });
    };