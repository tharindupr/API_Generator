var Bear = require('../models/bear');

exports.save = function (req, res) {
  var bear = new Bear();      // create a new instance of the Bear model
  bear.name = req.body.name;
  bear.save(function(err) {
   if (err) res.send(err);
   res.json({ message: 'Bear created!' });
  });
};


exports.see = function(req, res) {

    Bear.find(function(err, bears) {
     
           if (err)
                res.send(err);

            res.json(bears);
        }); 

 };