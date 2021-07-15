const express = require('express');
const apiRouter = express.Router();


const jsonObj = [
  {
    user_id: 1,
    user_name: "alby",
  },
  {
    user_id: 2,
    user_name: "benet",
  },
  {
    user_id: 3,
    user_name: "cathy",
  },
];


//api route
apiRouter.get(
  "/",
  (req, res, next) => {
    req.customProp = 'blah blah'  
    console.log("i am middleware for / route and i set custom prop to blah blah");
    next()
  },

  (err, req, res, next) => {
      if(err){
          res.send('<h1>sorry api error</h1>')
      }
  },
  (req, res) => {
      
      console.log("i am the route and i can see that the first middleware added a custom prop "+req.customProp)
      res.json(jsonObj);

  }

);

module.exports = apiRouter