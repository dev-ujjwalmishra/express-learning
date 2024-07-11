// Express.js is a web framework for Node.js.
// It is a fast, robust and asynchronous in nature.

// You can assume express as a layer built on the top of the Node.js that helps manage a server and routes.

// It provides robust set of features to develop web and mobile applications



// Core Features of express framework

// It can be used to design single-page, multi-page and hybrid web applications.

// It allows to setup middlewares to respond to HTTP Requests.



// Why use Express ?

// Ultra fast I/O
// Asynchronous and single threaded
// Robust API makes routing easy
// Need to write less code compared to NodeJS for routing



// Installing Express JS

// First create a directory for the express app
// Then create a file named app.js
// Then install the package manager that is package.json through npm init command
// Then, to install ExpressJS run npm install express command



// Using ExpressJS

// To use expressjs first we need to require express module and create an app by calling top level express() method



// Requiring Express Module and Creating Exprsss app

// const express = require("express");
// const app = express();



// Simple Hello World program in ExpressJS

// const express = require('express');
// const app = express();

// app.get('/',(req,res) => {
//     res.send('Hello World');
// });

// const server = app.listen(8000,() => {
//     const port = server.address().port;
//     const host = server.address().address;

//     console.log('Listening at https://%s:%s',host,port);
// });



// Handling multiple routes

// const express = require('express');
// const app = express();

// app.get('/',(req,res) => {
//     res.send('Hello from Home Page');
// });

// app.get('/about',(req,res) => {
//     res.send('Hello from About Page');
// });

// app.get('/contact',(req,res) => {
//     res.send('Hello from Contact Page');
// });

// const server = app.listen(8000,() => {
//     const host = server.address().address;
//     const port = server.address().port;

//     console.log("Listening at https://%s %s",host,port);
// });



// Routing in ExpressJS

// const express = require('express');
// const app = express();

// app.get('/',(req,res) => {
//     res.status(200);
//     res.send('Welcome to my home page by Ujjwal');
// });

// app.get('/about',(req,res) => {
//     res.send('Welcome to my about page');
// });

// app.get('/contact',(req,res) => {
//     res.send('Welcome to my contact page');
// });

// app.get('/temp',(req,res) => {
//     res.send('Welcome to my temp page');
// });


// const server = app.listen(8000,() => {
//     const host = server.address().address;
//     const port = server.address().port;
// });



// Serving HTML and JSON Data as a response using ExpressJS

// const express = require('express');
// const app = express();

// app.get('/',(req,res) => {

//     // html data

//     // res.statusCode = 200;
//     // res.contentType("text/html");

//     // To send just a single response
//     // res.send('<h1>Hello World</h1>');

//     // To send multiple response, here you need to set the content type
//     // res.contentType('text/html');
//     // res.write("<h2>How to get the value of x ?</h2>");
//     // res.write("<h2>What is the name of our national bird?</h2>");

//     // res._write = "<h1>Hello world</h1>";

//     // automatically sets the content type
//     // res.send();


//     // json data

//     // send method converts obj and arr of objs into json formate.
//     // res.send({
//     //     id: 1,
//     //     name: "Ujjwal Mishra",
//     //     gender: "Male",
//     //     age: 23
//     // });

//     // res.send([
//     //     {
//     //         name: "Ujjwal",
//     //         age: 23,
//     //         gender: "Male"
//     //     }
//     // ]);

//     // res.setHeader('content-type','application/json');

//     // res.write(JSON.stringify({
//     //     name: "Ujjwal",
//     //     age: 23
//     // }));

//     // res.send();

//     // res.json(["x",20,30,40]);

// });

// const server = app.listen(8000,() => {
//     const host = server.address().address;
//     const port = server.address().port;

//     console.log("listening at https://%s:%s",host,port);
// });



// how to serve static files

// const express = require('express');
// const path = require('path');
// const app = express();
// const PORT = process.env.PORT || 8000;

// // use a built in middleware called express.static()
// // Use middleware within app.use() method

// const staticPath = path.join(__dirname,"../public");

// // The app.use() function is used to mount the specified middleware function(s) at the path that is being specified.

// // It is mostly used to set up middleware for your application. 

// app.use(express.static(staticPath));

// app.get('/',(req,res) => {
//     res.send('Hello from the server side');
// });

// const server = app.listen(PORT,(err) => {
//     const host = server.address().address;
//     const port = server.address().port;
//     console.log(err);

//     console.log("Listening at https://$s:%s",host,port);
// })



// how to server a static website in express js
 
// To serve a static website we need to use express.static() middleware function. it's a built in middleware to expose the dir of file publicly.

// To use the middlewares we need pass it inside app.use() method

// const express = require('express');
// const path = require('path');
// const app = express();

// const project1Path = path.join(__dirname,'../project1');

// app.use(express.static(project1Path));

// app.get('/',(req,res) => {
//     res.send('Hello from the Express side');
// });

// const port = process.env.PORT || 8000;

// app.listen(port,(err) => {
//     if(err) console.log(err);

//     console.log("Listening at port "+port);
// });




// template engine in expressjs
// To serves a dynamic site using expressJS we need template engine.

// With the help of template engines we can create template files with variables, at runtime the variables in templates will be replaced with values by template engine and passed to the client as HTML code.

// There are different type of template engines available in expressJS. Some of most popular are Pug,EJS, and Mustache

// Handlebars is a template engine which is an extension to mustache template engine.

// const express = require("express");
// const app = express();      // this will create and express app
// const path =  require('path');
// const port = process.env.PORT || 8000;

// // setting the default directory for template files.
// app.set('views','./views');  // this defaults to the views dir in the app root dir

// // Set the views engine
// app.set('view engine','hbs');

// // To get the access of project1 dir
// const staticPath = path.join(__dirname,'../project1');

// // app.use() helps to mount the middleware to the application
// // app.use(express.static(staticPath));


// app.get("/",(req,res) => {
//     // console.log(req.url);
//     // console.log(req.ip);
//     // console.log(req.baseUrl);

//     // this will search for the file in views directory and render it.
//     // res.render('hello.hbs');

//     // res.render('tempNav.hbs',{username : "aditya"},(err,msg) => {
//     //     if(err) console.log(err);
//     //     console.log(msg);
//     //     res.send(msg);
//     // });
// });


// // Create a route
// app.get('/',(req,res) => {
//     res.send("Hello from the server side");
// });


// const ser = app.listen(port,() => {
//     const p = ser.address().port;
//     const h = ser.address().address;

//     console.log("Listening at port https://%s:%s",h,p);
// });




// serving a complete website using template engine 

// const express = require('express');
// const path = require('path');

// // create express
// const app = express();

// const port = process.env.PORT || 8000;

// // sets the default working dir for template engine
// app.set('views','./views1');

// app.set('view engine','hbs');


// // path of project1 dir
// const project1Path = path.join(__dirname,'../project1');

// app.use(express.static(project1Path));

// // routes
// app.get('/',(req, res) => {
//     res.send("Hello from the server side");
// });

// // route for a dynamic page name chatme.html
// app.get("/chatme.html",(req,res) => {
//     res.render('chatme.hbs',{userName: "Adi"});
// });

// // listening at the port
// app.listen(port,() => {
//     console.log("listening at port "+port);
// });




// Customizing Views Directory (renaming or putting in another dir)

// const express = require('express');
// const path = require('path');

// const app = express();
// const port = process.env.PORT || 8000;

// const templatePath = path.join(__dirname,'../templates');
// app.set('views',templatePath);


// // set the view engine
// app.set('view engine','hbs');

// app.get('/',(req,res) => {
//     res.send("Hello from the server side");
// });

// app.get('/msg',(req,res) => {
//     res.render('msg',{userName : "Aditya"});
// });

// app.listen(port,() => {
//     console.log("Listening at port "+port);
// });



// partials in expressjs

// In Express.js, partials are reusable components that enhance code organization and maintainability within webpages.

// Partials are smaller, reusable componets of a larger webpage (view in expressJS)

// Partials promote code reusability and make views more modular


// const express = require('express');
// const path = require('path');
// const hbs = require('hbs');

// const app = express();
// const port = process.env.PORT || 8000;

// const cssPath = path.join(__dirname,'../templates1/views/css');
// const viewPath = path.join(__dirname,'../templates1/views');
// const partialsPath = path.join(__dirname,'../templates1/partials');

// // setting the views dir and view engine
// app.set('views',viewPath);
// app.set('view engine','hbs');

// app.use(express.static(cssPath));

// hbs.registerPartials(partialsPath);

// app.get('/',(req,res) => {
//     // res.send('Hello from the server side');
//     res.render('index');
// });

// app.listen(port,() => {
//     console.log('Listening at port '+port);
// });




// Practice of Partials and Dynamic WebPages

// const express = require('express');
// const path = require('path');
// const hbs = require('hbs');

// const app = express();
// const port = process.env.PORT || 8000;

// const staticPath = path.join(__dirname,"../templates2/views/css");
// const viewsPath = path.join(__dirname,'../templates2/views');
// const partialsPath = path.join(__dirname,'../templates2/partials');

// app.use(express.static(staticPath));

// // Set views dir and engine
// app.set('views',viewsPath);
// app.set('view engine','hbs');

// // Register Partials
// hbs.registerPartials(partialsPath);

// // Routes
// app.get("/",(req,res) => {
//     // res.send("Hello from the server side");
//     res.render('index');
// });

// app.get("/blog",(req,res) => {
//     res.render('blog');
// });

// app.get('/about',(req,res) => {
//     res.render('about');
// });

// app.get('/contact', (req,res) => {
//     res.render('contact');
// });

// // Listen
// app.listen(port,() => {
//     console.log("Listening at port "+port);
// });



// partials and dynamic web pages practice 2

// const express = require('express');
// const path = require('path');
// const hbs = require('hbs');

// const app = express();
// const port = process.env.PORT || 8000;

// const staticPath = path.join(__dirname,"../templates3/views/css");
// const viewsPath = path.join(__dirname,'../templates3/views');
// const partialsPath = path.join(__dirname,'../templates3/partials');

// app.use(express.static(staticPath));

// // Set views dir and engine
// app.set('views',viewsPath);
// app.set('view engine','hbs');

// // Register Partials
// hbs.registerPartials(partialsPath);

// // Routes
// app.get("/",(req,res) => {
//     res.render('page',{
//         pageTitle: "Home Page",
//         pageHeading: "Home Page"
//     });
// });

// app.get("/blog",(req,res) => {
//     res.render('page',{
//         pageTitle: "Blog Page",
//         pageHeading: "Blog Page"
//     });
// });

// app.get('/about',(req,res) => {
//     res.render('page',{
//         pageTitle: "About Page",
//         pageHeading: "About Page"
//     });
// });

// app.get('/contact', (req,res) => {
//     res.render('page',{
//         pageTitle: "Contact Page",
//         pageHeading: "Contact Page"
//     });
// });

// // Listen
// app.listen(port,() => {
//     console.log("Listening at port "+port);
// });



// Adding 404 Error Page in Express

// const express = require('express');
// const path = require('path');
// const hbs = require('hbs');

// const app = express();
// const port = process.env.PORT || 8000;

// const staticPath = path.join(__dirname,'../templates2/views/css');
// const viewsPath = path.join(__dirname,'../templates2/views');
// const partialsPath = path.join(__dirname,'../templates2/partials');

// app.use(express.static(staticPath));

// hbs.registerPartials(partialsPath);

// // set views dir and view engine
// app.set('views',viewsPath);
// app.set('view engine','hbs');

// // routes

// app.get('/',(req,res) => {
//     res.render('index');
// });

// app.get('/blog',(req,res) => {
//     res.render('blog');
// });

// app.get('/about',(req,res) => {
//     res.render('about');
// });

// app.get('/contact',(req,res) => {
//     res.render('contact');
// });

// app.get('/contact/*',(req,res) => {
//     res.render('404',{msg : "404 Error! Contact page couldn't be found"});
// })

// // * is a special character that handles all endpoints
// app.get("*",(req,res) => {
//     // res.send("404 Error! Page couldn't be found.");
//     res.render('404',{msg: "404 Error! Page couldn't be found"});
// });


// app.listen(port,(err) => {
//     if(err) 
//         console.log(err);
//     console.log("Listening at port "+port);
// });



// Adding CSS in ExpressJS

// const express = require('express');
// const path = require('path');
// const hbs = require('hbs');

// const app = express();
// const port = process.env.PORT || 8000;

// const viewsPath = path.join(__dirname,'../test/template/views');

// app.set('views',viewsPath);
// app.set('view engine','hbs');

// const publicPath = path.join(__dirname,'../test/public');

// app.use(express.static(publicPath));

// const partialsPath = path.join(__dirname,'../test/template/partials');

// hbs.registerPartials(partialsPath);


// app.get('/',(req,res) => {
//     res.send('Hello from the server side');
// });

// app.get('/about',(req,res) => {
//     res.render('about',{
//         pageTitle: 'About Page',
//         pageHeading: 'About Page'
//     });
// });

// app.get('/contact',(req,res) => {
//     res.render('contact',{
//         pageTitle: 'Contact Page',
//         pageHeading: 'Contact Page'
//     });
// });

// app.get('*',(req,res) => {
//     res.render('404',{errorMsg : "404 Error! Page couldn't found."});
// });

// app.listen(port,(err) => {
//     if(err)
//         console.log(err);
//     console.log("Listening at port "+port);
// });



// ExpressJS + API


// const express = require('express');
// const { connect } = require('http2');
// const path = require('path');

// const app = express();
// const port = process.env.PORT || 8000;

// app.get("/",(req,res) => {
//     res.send("Hello from the server side");
// });

// app.get("/temp",async (req,res) => {
//     const cityName = req.query.city_name;

//     // wait until the promise is resolved and response we get
//     const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f53ecde89798a9a19298dc31b378749b`);

//     // wait until the response is converted to json
//     const data = await resp.json();

//     const tempInKelvin = data.main.temp;
//     const tempInCelsius = Math.floor(tempInKelvin - 273.15);

//     res.send(`<h1>Temp of ${cityName.toUpperCase()} is ${tempInCelsius} &deg;C</h1>`);

// });

// app.listen(port,(err) => {
//     if(err)
//         console.log(err);
//     console.log("Listening at port "+port);
// });

