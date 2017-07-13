var quoteController = function(Quote){
  var post = function(req, res){
    var quote = new Quote(req.body);

    if(!req.body.content){
      res.status(400);
      res.send('Content is required');
    }
    else {
      quote.save();
      res.status(201);
      res.send(quote);
    }
  };

  var get = function(req,res){
    var query = {};
    if(req.query.author){
      query.genre = req.query.genre
    }
    Quote.find(query, function(err,quotes){
      if(err)
        res.status(500).send(err);
      else
        res.json(quotes);
    });
  };

  var random = function(req,res){
    Quote.find(function(err,quotes){
      if(err){
        res.status(500).send(err);
      } else {
        var randomQ = quotes[Math.floor(Math.random()*quotes.length)];
        res.json(randomQ);
      }
    });
  };

  return {
    post: post,
    get: get,
    random: random
  }

}

module.exports = quoteController;
