var should = require('should'),
    sinon = require('sinon');

describe('Quote Controller Tests: ', function(){
  describe('Post', function(){
    it('should not allow an empty title on post', function(){
      var Quote = function(quote){this.save = function(){}};

      var req = {
        body: {
          author: 'Tae'
        }
      }

      var res = {
        status: sinon.spy(),
        send: sinon.spy()
      }
      var quoteController = require('../Controllers/quoteController')(Quote);

      quoteController.post(req,res);

      res.status.calledWith(400).should.equal(true, 'Bad Status '+res.status.args[0][0]);
      res.send.calledWith('Content is required').should.equal(true);
    })
  })
})
