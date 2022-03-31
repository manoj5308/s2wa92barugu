var express = require('express');
var router = express.Router();

/* GET computation page. */
router.get('/', function (req, res, next) {
  var m;
  
  var random = Math.random();
  console.log(req.query.m);
  x = req.query.m;

  // checking if url has params
  if (m == undefined) {
    m = random;
  }
  
  let atan2 = Math.atan2(m,m) 
  let atanh =Math.atanh(m)
  let cbrt = Math.cbrt(m)
 
  res.render('bonus', {
    title: 'Computation',
    Calculate: `applied to ` + m  + ` is ` + atan2 ,
    c1: `applied to ` + m + ` is ` + atanh,
    c2: `applied to ` + m + ` is ` + cbrt,
    
  });
});

module.exports = router;