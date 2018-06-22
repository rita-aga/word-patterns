var mongoose = require('mongoose');

var SentenceSchema = new mongoose.Schema({
    from_lang: String,
    dest_lang: String,
    from_text: String,
    dest_text: String,
    add_date: { type: Date, default: Date.now },
  });

  module.exports = mongoose.model('Sentence', SentenceSchema);