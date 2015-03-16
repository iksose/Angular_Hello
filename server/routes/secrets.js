module.exports = function(app) {
  var express = require('express');
  var secretsRouter = express.Router();
  var mongoose = require('mongoose');
  var userSchema = require('../models/secrets')

  secretsRouter.get('/', function(req, res) {
    var User = mongoose.model('secrets', userSchema);
    User.find({}, function(err, users) {
      if (err) throw err;
      res.send(users)
    });
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