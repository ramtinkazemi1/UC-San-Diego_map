const express = require('express');
const mongoose = require('mongoose');
const Issue = require('./models/Issue');
const bodyParser = require('body-parser');
const cors = require('cors');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/issueReport', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();

// Middleware for parsing bodies from URL
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Enable CORS
app.use(cors());

app.post('/issues', async (req, res) => {
  const { issueType, description, urgencyLevel, sendTo, location } = req.body;

  try {
    // Create new issue
    const issue = new Issue({
      issueType,
      description,
      urgencyLevel,
      sendTo,
      location,
    });

    // Save to the database
    await issue.save();

    // Send the new issue back in the response
    res.status(201).json(issue);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

app.listen(5000, () => console.log('Server listening on port 5000'));
