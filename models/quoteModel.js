var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var quoteModel = new Schema({
  content: {
    type: String
  },
  author: {
    type: String
  }
})

module.exports = mongoose.model('Quote', quoteModel);
