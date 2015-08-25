var express = require('express');
var router = express.Router();
var Bear     = require('../models/bear');
var controllers = require('../controllers')
  , bearController = require('../controllers/bear')

var router = express.Router();              // get an instance of the express Router


router.route('/bears')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {
        
        var bear = new Bear();      // create a new instance of the Bear model
        bear.name = req.body.name;  // set the bears name (comes from the request)

        // save the bear and check for errors
         bear.save(function(err) {

           if (err)
               res.send(err);

            res.json({ message: 'Bear created!' });
        });
      })

     .get(function(req, res) {
        Bear.find(function(err, bears) {
            if (err)
                res.send(err);

            res.json(bears);
        });
      });

module.exports = router;
