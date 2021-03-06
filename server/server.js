const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/createRouter');

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('quizzes');
    const scoresCollection = db.collection('scores');
    const scoresRouter = createRouter(scoresCollection);
    
    
    
    app.use('/api/scores', scoresRouter);
  })
  .catch(err => console.error(err));

app.listen(5000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});