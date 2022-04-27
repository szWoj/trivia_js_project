const express = require('express');

const createRouter = function (collection) {

  const router = express.Router();

  router.get('/', (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  router.post('/', (req, res) => {
    const newData = req.body;
    collection
    .insertOne(newData)
    .then((result) => {
        res.json(result.ops[0])
    })
    .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
  });
  })


 

  return router;
};

module.exports =createRouter;
