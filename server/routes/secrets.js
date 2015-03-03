module.exports = function(app) {
  var express = require('express');
  var secretsRouter = express.Router();

  secretsRouter.get('/', function(req, res) {
    setTimeout(function() {
      res.send({
        'secrets': [{
          id: 1,
          title: "i'm a ghost"
        }, {
          id: 2,
          title: "i'm a spooky ghost"
        }]
      });
    }, 1000)
  });

  secretsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  secretsRouter.get('/:id', function(req, res) {
    res.send({
      'secrets': {
        id: req.params.id
      }
    });
  });

  secretsRouter.put('/:id', function(req, res) {
    res.send({
      'secrets': {
        id: req.params.id
      }
    });
  });

  secretsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/secrets', secretsRouter);
};