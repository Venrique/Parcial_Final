const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const migraSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    procedencia: {type: String},
    destino: {type: String},
    km: {type: Number}
});

module.exports = mongoose.model('Migrante',migraSchema);