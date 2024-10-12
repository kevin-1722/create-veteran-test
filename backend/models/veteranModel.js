const mongoose = require('mongoose');

const veteranSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  studentID: { type: String, required: true },
  benefit: { type: String, required: true },
  requiredDocs: { type: [String], required: true }
});

module.exports = mongoose.model('Veteran', veteranSchema);