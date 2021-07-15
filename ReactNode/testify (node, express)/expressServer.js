const express = require("express");
const path = require("path");

// all the routes
const apiRoute = require('./routes/apiRoutes');
const helloRoute = require('./routes/helloRoute');

const app = express();

//init middlewares
app.use(globalMiddleware);
app.use(theErrMW);

//for getting data out of request obj or body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//use the routes
app.use('/api/getjsons', apiRoute);
app.use('/hello', helloRoute);

//set up a staitc folder
app.use(express.static(path.join(__dirname, "staticFolder")));
app.use(express.static(path.join(__dirname, "build")))





//define error middleware 
function theErrMW(err, req, res, next){
    if(err){res.send('<h1>sorry some error</h1>')}
}

//define middleware
function globalMiddleware(req, res, next){
    console.log('i am global middleware u called me before this route: '+req.url);
    const err = new Error();
    next();
}



app.listen(5000, () => console.log("server started at port 5000"));
