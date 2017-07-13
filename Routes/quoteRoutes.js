var express = require('express');

var routes = function(Quote){
  var quoteRouter = express.Router();

  var quoteController = require('../Controllers/quoteController')(Quote);
  quoteRouter.route('/')
    .post(quoteController.post)
    .get(quoteController.get);

  quoteRouter.route('/random')
    .get(quoteController.random)

  quoteRouter.use('/:quoteId',function(req,res,next){
    Quote.findById(req.params.quoteId, function(err,quote){
      if(err)
        res.status(500).send(err);
      else if(quote) {
        req.quote = quote;
        next();
      }
      else {
        res.status(404).send('no quote found');
      }
    });
  });

  quoteRouter.route('/:quoteId')
    .get(function(req,res){
      res.json(req.quote);
    })
    .put(function(req,res){
      req.quote.content = req.body.content;
      req.quote.author = req.body.author;
      req.quote.save(function(err){
        if(err)
          res.status(500).send(err);
        else{
          res.json(req.quote);
        }
      });
      res.json(quote);
    })
    .patch(function(req,res){
      if(req.body._id)
        delete req.body._id;

      for(var p in req.body){
        req.quote[p] = req.body[p];
      }

      req.quote.save(function(err){
        if(err)
          res.status(500).send(err);
        else{
          res.json(req.quote);
        }
      });
    });

  return quoteRouter;
};

module.exports = routes;
