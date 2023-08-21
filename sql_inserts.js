var mysql = require('mysql');


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",   // provide your own password.
    database: "db2" 
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    var sql_table1 = "create table users( \
        name VARCHAR(40) NOT NULL, \
        email VARCHAR(40) NOT NULL, \
        country VARCHAR(40) NOT NULL, \
        password VARCHAR(30) NOT NULL, \
        PRIMARY KEY (email) );" ;
    con.query(sql_table1, function (err, result) {
        if (err) throw err;
        console.log("Users Table created");
    });

    var sql_table2 = "create table services( \
        sid INT NOT NULL AUTO_INCREMENT, \
        name VARCHAR(70) NOT NULL, \
        descr VARCHAR(200) , \
        price DECIMAL(8,3) NOT NULL, \
        category VARCHAR(35) NOT NULL, "+ 
        "package VARCHAR(30) NOT NULL, \
        PRIMARY KEY (sid) );" ;
    con.query(sql_table2, function (err, result) {
        if (err) throw err;
        console.log("Services Table created");
    });

    var sql_table3 = "CREATE TABLE subscribed_services( \
        s_id INT NOT NULL, \
        email_id VARCHAR(40) NOT NULL, \
        PRIMARY KEY (s_id, email_id)," +
        "FOREIGN KEY (email_id) REFERENCES users(email), \
        FOREIGN KEY (s_id) REFERENCES services(sid)  );" ;
    con.query(sql_table3, function (err, result) {
        if (err) throw err;
        console.log("SUbscribed Services Table created");
    });

    var insert1 = "INSERT INTO users values ('Rida', 'rida10@gmail.com', 'Saudi Arabia', '123');";
    con.query(insert1, function (err, result) {
        if (err) throw err;
        console.log("Users row 1 inserted");
    });

        var sql_insert1 = "INSERT INTO users values ('Rudra', 'rudra10@gmail.com', 'Kuwait', '123');";
    con.query(sql_insert1, function (err, result) {
        if (err) throw err;
        console.log("Users row 1 inserted");
    });

    var sql_insert2 = "INSERT INTO users values ('Zamin', 'zamin10@gmail.com', 'United Arab Emirates', '123');";
    con.query(sql_insert2, function (err, result) {
        if (err) throw err;
        console.log("Users row 2 inserted");
    });

    var sql_insert3 = "INSERT INTO users values ('Khalid', 'khalid10@gmail.com', 'Oman', '123');";
    con.query(sql_insert3, function (err, result) {
        if (err) throw err;
        console.log("Users row 3 inserted");
    });

    var sql_insert4 = "INSERT INTO users values ('Madiha', 'madiha10@gmail.com', 'Qatar', '123');";
    con.query(sql_insert4, function (err, result) {
        if (err) throw err;
        console.log("Users row 4 inserted");
    });
    /////


    var sql_insert1 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (1, 'Jordy Hall- E-commerce,Advertising,Customer Service', 'Hello, I can help promote your ecommerce business to your target audience', 420, 'Business', 'Additional Package');";
con.query(sql_insert1, function (err, result) {
    if (err) throw err;
    console.log("Service row 1 inserted");
});

var sql_insert2 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (2, 'Jordy Hall- E-commerce,Advertising,Customer Service', 'Hello, I can help promote your ecommerce business to your target audience', 600, 'Business', 'All-inclusive Package');";
con.query(sql_insert2, function (err, result) {
    if (err) throw err;
    console.log("Service row 2 inserted");
});

var sql_insert3 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (3, 'Kelly James- Business Planning,Guides,Advice', 'I can help in advancing your ecommerce business to new levels.', 289, 'Business', 'Basic Package');";
con.query(sql_insert3, function (err, result) {
    if (err) throw err;
    console.log("Service row 3 inserted");
});

var sql_insert4 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (4, 'Kelly James- Business Planning,Guides,Advice', 'I can help in advancing your ecommerce business to new levels.', 329, 'Business', 'Additional Package');";
con.query(sql_insert4, function (err, result) {
    if (err) throw err;
    console.log("Service row 4 inserted");
});

var sql_insert5 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (5, 'Kelly James- Business Planning,Guides,Advice', 'I can help in advancing your ecommerce business to new levels.', 500, 'Business', 'All-inclusive Package');";
con.query(sql_insert5, function (err, result) {
    if (err) throw err;
    console.log("Service row 5 inserted");
});

var sql_insert6 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (6, 'John Clark- E-commerce,Customer Service', '', 310, 'Business', 'Basic Package');";
con.query(sql_insert6, function (err, result) {
    if (err) throw err;
    console.log("Service row 6 inserted");
});

var sql_insert7 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (7, 'John Clark- E-commerce,Customer Service', '', 350, 'Business', 'Additional Package');";
con.query(sql_insert7, function (err, result) {
    if (err) throw err;
    console.log("Service row 7 inserted");
});

var sql_insert8 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (8, 'John Clark- E-commerce,Customer Service', '', 400, 'Business', 'All-inclusive Package');";
con.query(sql_insert8, function (err, result) {
    if (err) throw err;
    console.log("Service row 8 inserted");
});

var sql_insert9 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (9, 'Ana Willow- Business Planning,Customer Service', 'Hello, I can help you start a business from scratch.', 109, 'Business', 'Basic Package');";
con.query(sql_insert9, function (err, result) {
    if (err) throw err;
    console.log("Service row 9 inserted");
});

var sql_insert10 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (10, 'Ana Willow- Business Planning,Customer Service', 'Hello, I can help you start a business from scratch.', 210, 'Business', 'Additional Package');";
con.query(sql_insert10, function (err, result) {
    if (err) throw err;
    console.log("Service row 10 inserted");
});

var sql_insert11 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (11, 'Ana Willow- Business Planning,Customer Service', 'Hello, I can help you start a business from scratch.', 400, 'Business', 'All-inclusive Package');";
con.query(sql_insert11, function (err, result) {
    if (err) throw err;
    console.log("Service row 11 inserted");
});

var sql_insert12 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (12, 'Jordy Hall- E-commerce,Advertising,Customer Service', 'Hello, I can help promote your ecommerce business to your target audience', 310, 'Business', 'Basic Package');";
con.query(sql_insert12, function (err, result) {
    if (err) throw err;
    console.log("Service row 12 inserted");
});

var sql_insert13 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (13, 'Jordy Hall- E-commerce,Advertising,Customer Service', 'Hello, I can help promote your ecommerce business to your target audience', 420, 'Business', 'Additional Package');";
con.query(sql_insert13, function (err, result) {
    if (err) throw err;
    console.log("Service row 13 inserted");
});

var sql_insert14 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (14, 'Jordy Hall- E-commerce,Advertising,Customer Service', 'Hello, I can help promote your ecommerce business to your target audience', 600, 'Business', 'All-inclusive Package');";
con.query(sql_insert14, function (err, result) {
    if (err) throw err;
    console.log("Service row 14 inserted");
});

var sql_insert15 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (15, 'Emma Kelly- Customer Relation, Financial advice and planning', 'I can provide industry level insight in the above mentioned topics.', 299, 'Business', 'Basic Package');";
con.query(sql_insert15, function (err, result) {
    if (err) throw err;
    console.log("Service row 15 inserted");
});

var sql_insert16 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (16, 'Emma Kelly- Customer Relation, Financial advice and planning', 'I can provide industry level insight in the above mentioned topics.', 330, 'Business', 'Additional Package');";
con.query(sql_insert16, function (err, result) {
    if (err) throw err;
    console.log("Service row 16 inserted");
});

var sql_insert17 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (17, 'Emma Kelly- Customer Relation, Financial advice and planning', 'I can provide industry level insight in the above mentioned topics.', 410, 'Business', 'All-inclusive Package');";
con.query(sql_insert17, function (err, result) {
    if (err) throw err;
    console.log("Service row 17 inserted");
});

var sql_insert18 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (18, 'Blaire Rae- Business administration,HR', 'I can help you in administration and providing advice for your business.', 179, 'Business', 'Basic Package');";
con.query(sql_insert18, function (err, result) {
    if (err) throw err;
    console.log("Service row 18 inserted");
});

var sql_insert19 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (19, 'Blaire Rae- Business administration,HR', 'I can help you in administration and providing advice for your business.', 240, 'Business', 'Additional Package');";
con.query(sql_insert19, function (err, result) {
    if (err) throw err;
    console.log("Service row 19 inserted");
});

var sql_insert20 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (20, 'Blaire Rae- Business administration,HR', 'I can help you in administration and providing advice for your business.', 450, 'Business', 'All-inclusive Package');";
con.query(sql_insert20, function (err, result) {
    if (err) throw err;
    console.log("Service row 20 inserted");
});

var sql_insert21 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (21, 'Liam Oscar- Financial Planning and advice', 'Hello, I can provide financial advice and bookkeeping.', 217, 'Business', 'Basic Package');";
con.query(sql_insert21, function (err, result) {
    if (err) throw err;
    console.log("Service row 21 inserted");
});

var sql_insert22 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (22, 'Liam Oscar- Financial Planning and advice', 'Hello, I can provide financial advice and bookkeeping.', 300, 'Business', 'Additional Package');";
con.query(sql_insert22, function (err, result) {
    if (err) throw err;
    console.log("Service row 22 inserted");
});

var sql_insert23 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (23, 'Liam Oscar- Financial Planning and advice', 'Hello, I can provide financial advice and bookkeeping.', 370, 'Business', 'All-inclusive Package');";
con.query(sql_insert23, function (err, result) {
    if (err) throw err;
    console.log("Service row 23 inserted");
});

var sql_insert24 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (24, 'John James-Art direction,Illustration', 'I can provide valuable insight on the mentioned topics.', 119, 'Graphic Designer', 'Basic Package');";
con.query(sql_insert24, function (err, result) {
    if (err) throw err;
    console.log("Service row 24 inserted");
});

var sql_insert25 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (25, 'John James-Art direction,Illustration', 'I can provide valuable insight on the mentioned topics.', 210, 'Graphic Designer', 'Additional Package');";
con.query(sql_insert25, function (err, result) {
    if (err) throw err;
    console.log("Service row 25 inserted");
});

var sql_insert26 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (26, 'John James-Art direction,Illustration', 'I can provide valuable insight on the mentioned topics.', 400, 'Graphic Designer', 'All-inclusive Package');";
con.query(sql_insert26, function (err, result) {
    if (err) throw err;
    console.log("Service row 26 inserted");
});

var sql_insert27 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (27, 'Alex Hughes-Web designing,Package designing', 'Hey,I can help design your webpage and package to make it eye-catching.', 215, 'Graphic Designer', 'Basic Package');";
con.query(sql_insert27, function (err, result) {
    if (err) throw err;
    console.log("Service row 27 inserted");
});

var sql_insert28 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (28, 'Alex Hughes-Web designing,Package designing', 'Hey,I can help design your webpage and package to make it eye-catching.', 215, 'Graphic Designer', 'Additional Package');";
con.query(sql_insert28, function (err, result) {
    if (err) throw err;
    console.log("Service row 28 inserted");
});

var sql_insert29 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (29, 'Alex Hughes-Web designing,Package designing', 'Hey,I can help design your webpage and package to make it eye-catching.', 215, 'Graphic Designer', 'All-inclusive Package');";
con.query(sql_insert29, function (err, result) {
    if (err) throw err;
    console.log("Service row 29 inserted");
});

var sql_insert30 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (30, 'Tresa Flores-Brand Identity and Logo Designing', 'I can help in providing services regarding the above mentioned topics', 99, 'Graphic Designer', 'Basic Package');";
con.query(sql_insert30, function (err, result) {
    if (err) throw err;
    console.log("Service row 30 inserted");
});

var sql_insert31 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (31, 'Tresa Flores-Brand Identity and Logo Designing', 'I can help in providing services regarding the above mentioned topics', 99, 'Graphic Designer', 'Additional Package');";
con.query(sql_insert31, function (err, result) {
    if (err) throw err;
    console.log("Service row 31 inserted");
});

var sql_insert32 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (32, 'Tresa Flores-Brand Identity and Logo Designing', 'I can help in providing services regarding the above mentioned topics', 99, 'Graphic Designer', 'All-inclusive Package');";
con.query(sql_insert32, function (err, result) {
    if (err) throw err;
    console.log("Service row 32 inserted");
});

var sql_insert33 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (33, 'Peter Hicks-Layout and Print Design', 'I can help in the mentioned topics while also providing valuable advice.', 79, 'Graphic Designer', 'Basic Package');";
con.query(sql_insert33, function (err, result) {
    if (err) throw err;
    console.log("Service row 33 inserted");
});

var sql_insert34 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (34, 'Peter Hicks-Layout and Print Design', 'I can help in the mentioned topics while also providing valuable advice.', 79, 'Graphic Designer', 'Additional Package');";
con.query(sql_insert34, function (err, result) {
    if (err) throw err;
    console.log("Service row 34 inserted");
});

var sql_insert35 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (35, 'Peter Hicks-Layout and Print Design', 'I can help in the mentioned topics while also providing valuable advice.', 79, 'Graphic Designer', 'All-inclusive Package');";
con.query(sql_insert35, function (err, result) {
    if (err) throw err;
    console.log("Service row 35 inserted");
});

var sql_insert36 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (36, 'Ashley Gomez-Software Interface,Web Designing', 'Hi, I can provide expert level service in the mentioned topics.', 229, 'Graphic Designer', 'Basic Package');";
con.query(sql_insert36, function (err, result) {
    if (err) throw err;
    console.log("Service row 36 inserted");
});

var sql_insert37 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (37, 'Ashley Gomez-Software Interface,Web Designing', 'Hi, I can provide expert level service in the mentioned topics.', 229, 'Graphic Designer', 'Additional Package');";
con.query(sql_insert37, function (err, result) {
    if (err) throw err;
    console.log("Service row 37 inserted");
});

var sql_insert38 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (38, 'Ashley Gomez-Software Interface,Web Designing', 'Hi, I can provide expert level service in the mentioned topics.', 229, 'Graphic Designer', 'All-inclusive Package');";
con.query(sql_insert38, function (err, result) {
    if (err) throw err;
    console.log("Service row 38 inserted");
});

var sql_insert39 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (39, 'Alice Bell-Game Design', 'I can help in designing and providing advice', 115, 'Graphic Designer', 'Basic Package');";
con.query(sql_insert39, function (err, result) {
    if (err) throw err;
    console.log("Service row 39 inserted");
});

var sql_insert40 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (40, 'Alice Bell-Game Design', 'I can help in designing and providing advice', 115, 'Graphic Designer', 'Additional Package');";
con.query(sql_insert40, function (err, result) {
    if (err) throw err;
    console.log("Service row 40 inserted");
});

    var sql_insert41 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (41, 'Alice Bell-Game Design', 'I can help in designing and providing advice', 115, 'Graphic Designer', 'All-inclusive Package');";
    con.query(sql_insert41, function (err, result) {
        if (err) throw err;
        console.log("Service row 41 inserted");
    });

    var sql_insert42 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (42, 'Joey Sanders-UI and Interactive Advice', 'I have 3 years experience in the topics and help you design and code it.', 49, 'Graphic Designer', 'Basic Package');";
    con.query(sql_insert42, function (err, result) {
        if (err) throw err;
        console.log("Service row 42 inserted");
    });

    var sql_insert43 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (43, 'Joey Sanders-UI and Interactive Advice', 'I have 3 years experience in the topics and help you design and code it.', 49, 'Graphic Designer', 'Additional Package');";
    con.query(sql_insert43, function (err, result) {
        if (err) throw err;
        console.log("Service row 43 inserted");
    });

    var sql_insert44 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (44, 'Joey Sanders-UI and Interactive Advice', 'I have 3 years experience in the topics and help you design and code it.', 49, 'Graphic Designer', 'All-inclusive Package');";
    con.query(sql_insert44, function (err, result) {
        if (err) throw err;
        console.log("Service row 44 inserted");
    });

    var sql_insert45 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (45, 'Hanna May-Publication and Typographic Design', 'Hello, I can help you and provide expert work in these topics.', 60, 'Graphic Designer', 'Basic Package');";
    con.query(sql_insert45, function (err, result) {
        if (err) throw err;
        console.log("Service row 45 inserted");
    });

    var sql_insert46 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (46, 'Hanna May-Publication and Typographic Design', 'Hello, I can help you and provide expert work in these topics.', 60, 'Graphic Designer', 'Additional Package');";
    con.query(sql_insert46, function (err, result) {
        if (err) throw err;
        console.log("Service row 46 inserted");
    });

    var sql_insert47 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (47, 'Hanna May-Publication and Typographic Design', 'Hello, I can help you and provide expert work in these topics.', 60, 'Graphic Designer', 'All-inclusive Package');";
    con.query(sql_insert47, function (err, result) {
        if (err) throw err;
        console.log("Service row 47 inserted");
    });


    var sql_insert48 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (48, 'Henry Williams-Marketing Information Management', 'I will help you in managing your information related to your business domain', 59, 'Marketing', 'Basic Package');";
    con.query(sql_insert48, function (err, result) {
        if (err) throw err;
        console.log("Service row 48 inserted");
    });

    var sql_insert49 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (49, 'Henry Williams-Marketing Information Management', 'I will help you in managing your information related to your business domain', 59, 'Marketing', 'Additional Package');";
    con.query(sql_insert49, function (err, result) {
        if (err) throw err;
        console.log("Service row 49 inserted");
    });

    var sql_insert50 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (50, 'Henry Williams-Marketing Information Management', 'I will help you in managing your information related to your business domain', 59, 'Marketing', 'All-inclusive Package');";
    con.query(sql_insert50, function (err, result) {
        if (err) throw err;
        console.log("Service row 50 inserted");
    });

    var sql_insert51 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (51, 'Kai Kendric- Promotion,Selling', 'I will help you in promoting your items and advice you on various ways to help in selling products.', 79, 'Marketing', 'Basic Package');";
    con.query(sql_insert51, function (err, result) {
        if (err) throw err;
        console.log("Service row 51 inserted");
    });

    var sql_insert52 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (52, 'Kai Kendric- Promotion,Selling', 'I will help you in promoting your items and advice you on various ways to help in selling products.', 79, 'Marketing', 'Additional Package');";
    con.query(sql_insert52, function (err, result) {
        if (err) throw err;
        console.log("Service row 52 inserted");
    });

    var sql_insert53 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (53, 'Kai Kendric- Promotion,Selling', 'I will help you in promoting your items and advice you on various ways to help in selling products.', 79, 'Marketing', 'All-inclusive Package');";
    con.query(sql_insert53, function (err, result) {
        if (err) throw err;
        console.log("Service row 53 inserted");
    });

    var sql_insert54 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (54, 'Emma Wilton- International Marketing,Pricing', 'Hello, I will provide advice on the above topics.', 39, 'Marketing', 'Basic Package');";
    con.query(sql_insert54, function (err, result) {
        if (err) throw err;
        console.log("Service row 54 inserted");
    });

    var sql_insert55 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (55, 'Emma Wilton- International Marketing,Pricing', 'Hello, I will provide advice on the above topics.', 39, 'Marketing', 'Additional Package');";
    con.query(sql_insert55, function (err, result) {
        if (err) throw err;
        console.log("Service row 55 inserted");
    });

    var sql_insert56 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (56, 'Emma Wilton- International Marketing,Pricing', 'Hello, I will provide advice on the above topics.', 39, 'Marketing', 'All-inclusive Package');";
    con.query(sql_insert56, function (err, result) {
        if (err) throw err;
        console.log("Service row 56 inserted");
    });

    var sql_insert57 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (57, 'Tristan Hunter-Customer-driven Marketing Strategy', 'I will provide insight on how to promote your product', 75, 'Marketing', 'Basic Package');";
    con.query(sql_insert57, function (err, result) {
        if (err) throw err;
        console.log("Service row 57 inserted");
    });

    var sql_insert58 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (58, 'Tristan Hunter-Customer-driven Marketing Strategy', 'I will provide insight on how to promote your product', 75, 'Marketing', 'Additional Package');";
    con.query(sql_insert58, function (err, result) {
        if (err) throw err;
        console.log("Service row 58 inserted");
    });

    var sql_insert59 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (59, 'Tristan Hunter-Customer-driven Marketing Strategy', 'I will provide insight on how to promote your product', 75, 'Marketing', 'All-inclusive Package');";
    con.query(sql_insert59, function (err, result) {
        if (err) throw err;
        console.log("Service row 59 inserted");
    });

    var sql_insert60 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (60, 'Charlotte Ray- Pricing', 'Hello, I will provide valuable advice on pricing of products, choosing sellers and various other related topics', 39, 'Marketing', 'Basic Package');";
    con.query(sql_insert60, function (err, result) {
        if (err) throw err;
        console.log("Service row 60 inserted");
    });

    var sql_insert61 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (61, 'Charlotte Ray- Pricing', 'Hello, I will provide valuable advice on pricing of products, choosing sellers and various other related topics', 39, 'Marketing', 'Additional Package');";
    con.query(sql_insert61, function (err, result) {
        if (err) throw err;
        console.log("Service row 61 inserted");
    });

    var sql_insert62 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (62, 'Charlotte Ray- Pricing', 'Hello, I will provide valuable advice on pricing of products, choosing sellers and various other related topics', 39, 'Marketing', 'All-inclusive Package');";
    con.query(sql_insert62, function (err, result) {
        if (err) throw err;
        console.log("Service row 62 inserted");
    });

    var sql_insert63 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (63, 'Abigail James- Integrated Marketing Management', 'Hi, I will provide you an outsider view and advices on your current marketing strategy.', 139, 'Marketing', 'Basic Package');";
    con.query(sql_insert63, function (err, result) {
        if (err) throw err;
        console.log("Service row 63 inserted");
    });

    var sql_insert64 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (64, 'Abigail James- Integrated Marketing Management', 'Hi, I will provide you an outsider view and advices on your current marketing strategy.', 139, 'Marketing', 'Additional Package');";
    con.query(sql_insert64, function (err, result) {
        if (err) throw err;
        console.log("Service row 64 inserted");
    });

    var sql_insert65 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (65, 'Abigail James- Integrated Marketing Management', 'Hi, I will provide you an outsider view and advices on your current marketing strategy.', 139, 'Marketing', 'All-inclusive Package');";
    con.query(sql_insert65, function (err, result) {
        if (err) throw err;
        console.log("Service row 65 inserted");
    });

    var sql_insert66 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (66, 'Della Elsner- Direct Marketing', 'Hello, I can help you in your process of direct marketing and help find a solution which works best for your organization', 49, 'Marketing', 'Basic Package');";
    con.query(sql_insert66, function (err, result) {
        if (err) throw err;
        console.log("Service row 66 inserted");
    });

    var sql_insert67 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (67, 'Della Elsner- Direct Marketing', 'Hello, I can help you in your process of direct marketing and help find a solution which works best for your organization', 49, 'Marketing', 'Additional Package');";
    con.query(sql_insert67, function (err, result) {
        if (err) throw err;
        console.log("Service row 67 inserted");
    });

    var sql_insert68 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (68, 'Della Elsner- Direct Marketing', 'Hello, I can help you in your process of direct marketing and help find a solution which works best for your organization', 49, 'Marketing', 'All-inclusive Package');";
    con.query(sql_insert68, function (err, result) {
        if (err) throw err;
        console.log("Service row 68 inserted");
    });

    var sql_insert69 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (69, 'Jack Benjamin-Marketing automation', 'I can help you create the perfect marketing automation for your needs.', 339, 'Marketing', 'Basic Package');";
    con.query(sql_insert69, function (err, result) {
        if (err) throw err;
        console.log("Service row 69 inserted");
    });

    var sql_insert70 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (70, 'Jack Benjamin-Marketing automation', 'I can help you create the perfect marketing automation for your needs.', 339, 'Marketing', 'Additional Package');";
    con.query(sql_insert70, function (err, result) {
        if (err) throw err;
        console.log("Service row 70 inserted");
    });

    var sql_insert71 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (71, 'Jack Benjamin-Marketing automation', 'I can help you create the perfect marketing automation for your needs.', 339, 'Marketing', 'All-inclusive Package');";
    con.query(sql_insert71, function (err, result) {
        if (err) throw err;
        console.log("Service row 71 inserted");
    });

    var sql_insert72 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (72, 'Henry William-Marketing Management, Pricing', 'I can help you in marketing and identifying the possible prices for products.', 89, 'Marketing', 'Basic Package');";
    con.query(sql_insert72, function (err, result) {
        if (err) throw err;
        console.log("Service row 72 inserted");
    });

    var sql_insert73 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (73, 'Henry William-Marketing Management, Pricing', 'I can help you in marketing and identifying the possible prices for products.', 89, 'Marketing', 'Additional Package');";
    con.query(sql_insert73, function (err, result) {
        if (err) throw err;
        console.log("Service row 73 inserted");
    });

    var sql_insert74 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (74, 'Henry William-Marketing Management, Pricing', 'I can help you in marketing and identifying the possible prices for products.', 89, 'Marketing', 'All-inclusive Package');";
    con.query(sql_insert74, function (err, result) {
        if (err) throw err;
        console.log("Service row 74 inserted");
    });

    var sql_insert75 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (75, 'Jacob John - C++,SQL,Python', 'I will help you code according to your needs.', 199, 'Programmers', 'Basic Package');";
    con.query(sql_insert75, function (err, result) {
        if (err) throw err;
        console.log("Service row 75 inserted");
    });

    var sql_insert76 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (76, 'Jacob John - C++,SQL,Python', 'I will help you code according to your needs.', 199, 'Programmers', 'Additional Package');";
    con.query(sql_insert76, function (err, result) {
        if (err) throw err;
        console.log("Service row 76 inserted");
    });

    var sql_insert77 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (77, 'Jacob John - C++,SQL,Python', 'I will help you code according to your needs.', 199, 'Programmers', 'All-inclusive Package');";
    con.query(sql_insert77, function (err, result) {
        if (err) throw err;
        console.log("Service row 77 inserted");
    });

    var sql_insert78 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (78, 'Alicia Homes - Go,Java,JS', 'I can code proficiently in the above mentioned languages.', 110, 'Programmers', 'Basic Package');";
    con.query(sql_insert78, function (err, result) {
        if (err) throw err;
        console.log("Service row 78 inserted");
    });

    var sql_insert79 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (79, 'Alicia Homes - Go,Java,JS', 'I can code proficiently in the above mentioned languages.', 110, 'Programmers', 'Additional Package');";
    con.query(sql_insert79, function (err, result) {
        if (err) throw err;
        console.log("Service row 79 inserted");
    });

    var sql_insert80 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (80, 'Alicia Homes - Go,Java,JS', 'I can code proficiently in the above mentioned languages.', 110, 'Programmers', 'All-inclusive Package');";
    con.query(sql_insert80, function (err, result) {
        if (err) throw err;
        console.log("Service row 80 inserted");
    });

    var sql_insert81 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (81, 'Ben Thomas - C++,C#', 'I can help code your projects.', 219, 'Programmers', 'Basic Package');";
    con.query(sql_insert81, function (err, result) {
        if (err) throw err;
        console.log("Service row 81 inserted");
    });

    var sql_insert82 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (82, 'Ben Thomas - C++,C#', 'I can help code your projects.', 219, 'Programmers', 'Additional Package');";
    con.query(sql_insert82, function (err, result) {
        if (err) throw err;
        console.log("Service row 82 inserted");
    });

    var sql_insert83 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (83, 'Ben Thomas - C++,C#', 'I can help code your projects.', 219, 'Programmers', 'All-inclusive Package');";
    con.query(sql_insert83, function (err, result) {
        if (err) throw err;
        console.log("Service row 83 inserted");
    });

    var sql_insert84 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (84, 'Tina Turner - R,SQL,C', 'Hey there, I can help you code in the above languages.', 55, 'Programmers', 'Basic Package');";
    con.query(sql_insert84, function (err, result) {
        if (err) throw err;
        console.log("Service row 84 inserted");
    });

    var sql_insert85 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (85, 'Tina Turner - R,SQL,C', 'Hey there, I can help you code in the above languages.', 55, 'Programmers', 'Additional Package');";
    con.query(sql_insert85, function (err, result) {
        if (err) throw err;
        console.log("Service row 85 inserted");
    });

    var sql_insert86 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (86, 'Tina Turner - R,SQL,C', 'Hey there, I can help you code in the above languages.', 55, 'Programmers', 'All-inclusive Package');";
    con.query(sql_insert86, function (err, result) {
        if (err) throw err;
        console.log("Service row 86 inserted");
    });

    var sql_insert87 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (87, 'Alicia Key - Go,Perl,Java', 'I have an experience of 5 years in the mentioned languages.', 99, 'Programmers', 'Basic Package');";
    con.query(sql_insert87, function (err, result) {
        if (err) throw err;
        console.log("Service row 87 inserted");
    });

    var sql_insert88 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (88, 'Alicia Key - Go,Perl,Java', 'I have an experience of 5 years in the mentioned languages.', 99, 'Programmers', 'Additional Package');";
    con.query(sql_insert88, function (err, result) {
        if (err) throw err;
        console.log("Service row 88 inserted");
    });

    var sql_insert89 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (89, 'Alicia Key - Go,Perl,Java', 'I have an experience of 5 years in the mentioned languages.', 99, 'Programmers', 'All-inclusive Package');";
    con.query(sql_insert89, function (err, result) {
        if (err) throw err;
        console.log("Service row 89 inserted");
    });

    var sql_insert90 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (90, 'Johnny Jenkins-Biotechnology', 'I can provide an outsider view and guidance for your current projects.', 139, 'Technical Supports', 'Basic Package');";
    con.query(sql_insert90, function (err, result) {
        if (err) throw err;
        console.log("Service row 90 inserted");
    });

    var sql_insert91 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (91, 'Johnny Jenkins-Biotechnology', 'I can provide an outsider view and guidance for your current projects.', 420, 'Technical Supports', 'Additional Package');";
    con.query(sql_insert91, function (err, result) {
        if (err) throw err;
        console.log("Service row 91 inserted");
    });

    var sql_insert92 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (92, 'Johnny Jenkins-Biotechnology', 'I can provide an outsider view and guidance for your current projects.', 139, 'Technical Supports', 'All-inclusive Package');";
    con.query(sql_insert92, function (err, result) {
        if (err) throw err;
        console.log("Service row 92 inserted");
    });

    var sql_insert93 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (93, 'Eliy Summer-Robotics', 'I can help you in completing your robotics project while also providing guidance.', 339, 'Technical Supports', 'Basic Package');";
    con.query(sql_insert93, function (err, result) {
        if (err) throw err;
        console.log("Service row 93 inserted");
    });

    var sql_insert94 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (94, 'Eliy Summer-Robotics', 'I can help you in completing your robotics project while also providing guidance.', 339, 'Technical Supports', 'Additional Package');";
    con.query(sql_insert94, function (err, result) {
        if (err) throw err;
        console.log("Service row 94 inserted");
    });

    var sql_insert95 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (95, 'Eliy Summer-Robotics', 'I can help you in completing your robotics project while also providing guidance.', 339, 'Technical Supports', 'All-inclusive Package');";
    con.query(sql_insert95, function (err, result) {
        if (err) throw err;
        console.log("Service row 95 inserted");
    });

    var sql_insert96 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (96, 'Scott Riveria-Big Data', 'Hello, I can help in creating and utilizing DBMS structure and queries.', 249, 'Technical Supports', 'Basic Package');";
    con.query(sql_insert96, function (err, result) {
        if (err) throw err;
        console.log("Service row 96 inserted");
    });

    var sql_insert97 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (97, 'Scott Riveria-Big Data', 'Hello, I can help in creating and utilizing DBMS structure and queries.', 249, 'Technical Supports', 'Additional Package');";
    con.query(sql_insert97, function (err, result) {
        if (err) throw err;
        console.log("Service row 97 inserted");
    });

    var sql_insert98 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (98, 'Scott Riveria-Big Data', 'Hello, I can help in creating and utilizing DBMS structure and queries.', 249, 'Technical Supports', 'All-inclusive Package');";
    con.query(sql_insert98, function (err, result) {
        if (err) throw err;
        console.log("Service row 98 inserted");
    });

    var sql_insert99 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (99, 'Olive Parker-Augmented Reality', 'I can help you in creating a project from beginning to end.', 110, 'Technical Supports', 'Basic Package');";
    con.query(sql_insert99, function (err, result) {
        if (err) throw err;
        console.log("Service row 99 inserted");
    });

    var sql_insert100 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (100, 'Olive Parker-Augmented Reality', 'I can help you in creating a project from beginning to end.', 110, 'Technical Supports', 'Additional Package');";
    con.query(sql_insert100, function (err, result) {
        if (err) throw err;
        console.log("Service row 100 inserted");
    });

    var sql_insert101 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (101, 'Olive Parker-Augmented Reality', 'I can help you in creating a project from beginning to end.', 110, 'Technical Supports', 'All-inclusive Package');";
    con.query(sql_insert101, function (err, result) {
        if (err) throw err;
        console.log("Service row 101 inserted");
    });

    var sql_insert102 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (102, 'Mary Lee-IOT,AI', 'I can help you in connecting AI with IoT devices while also providing expert level advice.', 309, 'Technical Supports', 'Basic Package');";
    con.query(sql_insert102, function (err, result) {
        if (err) throw err;
        console.log("Service row 102 inserted");
    });

    var sql_insert103 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (103, 'Mary Lee-IOT,AI', 'I can help you in connecting AI with IoT devices while also providing expert level advice.', 309, 'Technical Supports', 'Additional Package');";
    con.query(sql_insert103, function (err, result) {
        if (err) throw err;
        console.log("Service row 103 inserted");
    });

    var sql_insert104 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (104, 'Mary Lee-IOT,AI', 'I can help you in connecting AI with IoT devices while also providing expert level advice.', 309, 'Technical Supports', 'All-inclusive Package');";
    con.query(sql_insert104, function (err, result) {
        if (err) throw err;
        console.log("Service row 104 inserted");
    });

    var sql_insert105 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (105, 'Cindy Raven-Space and Operational Technology', 'Hey, I can help you in understanding and utilizing the above topics better.', 189, 'Technical Supports', 'Basic Package');";
    con.query(sql_insert105, function (err, result) {
        if (err) throw err;
        console.log("Service row 105 inserted");
    });

    var sql_insert106 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (106, 'Cindy Raven-Space and Operational Technology', 'Hey, I can help you in understanding and utilizing the above topics better.', 189, 'Technical Supports', 'Additional Package');";
    con.query(sql_insert106, function (err, result) {
        if (err) throw err;
        console.log("Service row 106 inserted");
    });

    var sql_insert107 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (107, 'Cindy Raven-Space and Operational Technology', 'Hey, I can help you in understanding and utilizing the above topics better.', 189, 'Technical Supports', 'All-inclusive Package');";
    con.query(sql_insert107, function (err, result) {
        if (err) throw err;
        console.log("Service row 107 inserted");
    });

    var sql_insert108 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (108, 'Sebastian Cole-Communication Technology', 'I can help you understand the basic information and how to use it for your personal projects.', 99, 'Technical Supports', 'Basic Package');";
    con.query(sql_insert108, function (err, result) {
        if (err) throw err;
        console.log("Service row 108 inserted");
    });

    var sql_insert109 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (109, 'Sebastian Cole-Communication Technology', 'I can help you understand the basic information and how to use it for your personal projects.', 99, 'Technical Supports', 'Additional Package');";
    con.query(sql_insert109, function (err, result) {
        if (err) throw err;
        console.log("Service row 109 inserted");
    });

    var sql_insert110 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (110, 'Sebastian Cole-Communication Technology', 'I can help you understand the basic information and how to use it for your personal projects.', 99, 'Technical Supports', 'All-inclusive Package');";
    con.query(sql_insert110, function (err, result) {
        if (err) throw err;
        console.log("Service row 110 inserted");
    });

    var sql_insert111 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (111, 'Melody Levine-Educational Technology', 'I can help you identify and create a learning process which suits you.', 129, 'Technical Supports', 'Basic Package');";
    con.query(sql_insert111, function (err, result) {
        if (err) throw err;
        console.log("Service row 111 inserted");
    });

    var sql_insert112 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (112, 'Melody Levine-Educational Technology', 'I can help you identify and create a learning process which suits you.', 129, 'Technical Supports', 'Additional Package');";
    con.query(sql_insert112, function (err, result) {
        if (err) throw err;
        console.log("Service row 112 inserted");
    });

    var sql_insert113 = "INSERT INTO services (sid, name, descr, price, category, package) VALUES (113, 'Melody Levine-Educational Technology', 'I can help you identify and create a learning process which suits you.', 129, 'Technical Supports', 'All-inclusive Package');";
    con.query(sql_insert113, function (err, result) {
        if (err) throw err;
        console.log("Service row 113 inserted");
    });

    var sql_ins1 = "INSERT INTO subscribed_services values (17, 'rida10@gmail.com');";
    con.query(sql_ins1, function (err, result) {
        if (err) throw err;
        console.log("Sb 1 inserted");
    });

    var sql_ins2 = "INSERT INTO subscribed_services values (20, 'rida10@gmail.com');";
    con.query(sql_ins2, function (err, result) {
        if (err) throw err;
        console.log("Sb 2 inserted");
    });

    var sql_ins3 = "INSERT INTO subscribed_services values (46, 'rudra10@gmail.com');";
    con.query(sql_ins3, function (err, result) {
        if (err) throw err;
        console.log("Sb 3 inserted");
    });

    var sql_ins4 = "INSERT INTO subscribed_services values (32, 'rudra10@gmail.com');";
    con.query(sql_ins4, function (err, result) {
        if (err) throw err;
        console.log("Sb 4 inserted");
    });

    var sql_ins5 = "INSERT INTO subscribed_services values (76, 'zamin10@gmail.com');";
    con.query(sql_ins5, function (err, result) {
        if (err) throw err;
        console.log("Sb 5 inserted");
    });

    var sql_ins6 = "INSERT INTO subscribed_services values (91, 'zamin10@gmail.com');";
    con.query(sql_ins6, function (err, result) {
        if (err) throw err;
        console.log("Sb 6 inserted");
    });

    var sql_ins7 = "INSERT INTO subscribed_services values (83, 'khalid10@gmail.com');";
    con.query(sql_ins7, function (err, result) {
        if (err) throw err;
        console.log("Sb 7 inserted");
    });

    var sql_ins8 = "INSERT INTO subscribed_services values (20, 'khalid10@gmail.com');";
    con.query(sql_ins8, function (err, result) {
        if (err) throw err;
        console.log("Sb 8 inserted");
    });

    var sql_ins9 = "INSERT INTO subscribed_services values (56, 'madiha10@gmail.com');";
    con.query(sql_ins9, function (err, result) {
        if (err) throw err;
        console.log("Sb 9 inserted");
    });

    var sql_ins10 = "INSERT INTO subscribed_services values (111, 'madiha10@gmail.com');";
    con.query(sql_ins10, function (err, result) {
        if (err) throw err;
        console.log("Sb 10 inserted");
    });

});
