var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    host;

var promise = mongoose.connect('mongodb://mongo:27017/quotesAPI', {
  useMongoClient: true
});

promise.then(function(db){
});


var Quote = require('./models/quoteModel');

var app = express();

var port = process.env.PORT || 9000;


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors({credentials: true, origin: true}));

quoteRouter = require('./Routes/quoteRoutes')(Quote);
app.use('/api/quotes', quoteRouter);

app.get('/', function(req, res){
  res.send('welcome to my API')
});

app.listen(port, function(){
  console.log('Running on PORT:' + port)
})
