var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Migrante = require('../models/migrantes.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  Migrante.find({},function(err,migrantes){
    if(err){
      console.log(err);
      res.status(500).render('Migrantes', { title: 'Administrador de Migrantes' });
    }else{
      res.status(200).render('Migrantes', { title: 'Administrador de Migrantes', migrantes: JSON.stringify(migrantes) });
    }   
  });
});

router.post('/', function(req, res, next) {
  var migra = new Migrante({
    _id: new mongoose.Types.ObjectId,
    procedencia: req.body.proc,
    destino: req.body.des,
    km: req.body.km
  });

  migra.save().then(result =>{
    if(result){
      console.log(result);
    }
    res.status(200).redirect('/api/Migrantes');
  }).catch(err => {
    console.log(err);
    res.status(400).redirect('/api/Migrantes');
  })

});

router.get('/:id/del', function(req, res, next) {
  Migrante.findByIdAndDelete({_id: req.params.id},function(err, response){
    if(err){
      console.log(err);
      res.status(400).redirect('/api/Migrantes');
    }else{
      res.status(200).redirect('/api/Migrantes');
    }
  });
});

router.delete('/:id/del', function(req, res, next) {
  Migrante.findByIdAndDelete({_id: req.params.id},function(err, response){
    if(err){
      console.log(err);
      res.status(400).redirect('/api/Migrantes');
    }else{
      res.status(200).redirect('/api/Migrantes');
    }
  });
});

module.exports = router;