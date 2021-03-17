var express = require ('express');
var router = express.Router();
var burgers = require('../models/burgers.js');

router.get('/', (req,result) => {
  burgers.selectAll((data) => {
    var hbsObject = {
      burgers: data
    }
    result.render('index', hbsObject);
  });
});

router.post('/api/burgers', (req,result) => {
  burgers.insertOne(
    'burger_name',
  [req.body.burger_name],
  (res) => {
    result.json({id: res.insertId});
  });
});

router.put('/api/burgers/:id', (req,result) => {
  var status = 'id = '+req.params.id;

  burgers.updateOne(
    {devoured: req.body.devoured},
    status, 
    (res) =>{
      if(res.changedRows === 0){
        return result.status(404).end();
      } else {
        result.status(200).end();
      }
    });
});

module.exports = router;