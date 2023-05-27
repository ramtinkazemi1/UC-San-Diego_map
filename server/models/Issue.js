const mongoose = require('mongoose');

const IssueSchema = new mongoose.Schema({
  issueType: String,
  description: String,
  urgencyLevel: String, // changed this to String to match your frontend form
  sendTo: String,
  location: {
    latitude: Number,
    longitude: Number,
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Issue', IssueSchema);
