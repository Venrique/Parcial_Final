var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Migrante = require('../models/migrantes.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  Migrante.find({},function(err,migrantes){
    if(err){
      console.log(err);
      res.render('Migrantes', { title: 'Administrador de Migrantes' });
    }else{
      console.log(JSON.stringify(migrantes));
      res.render('Migrantes', { title: 'Administrador de Migrantes', migrantes: JSON.stringify(migrantes) });
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
    res.redirect('/api/Migrantes');
  }).catch(err => {
    console.log(err);
    res.redirect('/api/Migrantes');
  })

});

module.exports = router;