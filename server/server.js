// server.js
const express = require('express');
const cors = require('cors');
const Issue = require('./Issue');
const sequelize = require('./database');

const app = express();

app.use(express.json()); // Updated this line
app.use(cors({
  origin: ['https://ramtinmapbox.netlify.app', 'http://localhost:3000'],
  optionsSuccessStatus: 200,
}));

sequelize.sync()
  .then(() => console.log('Issues table has been successfully created, if one does not exist'))
  .catch(error => console.log('This error occurred', error));

app.post('/issues', async (req, res) => {
  console.log(req.body); // This line logs the request body

  const { issueType, description, urgencyLevel, sendTo, location } = req.body;

  try {

    const issue = await Issue.create({
      issueType,
      description,
      urgencyLevel,
      sendTo,
      latitude: location.latitude,
      longitude: location.longitude,
    });

    res.status(201).json(issue);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

app.get('/issues', async (req, res) => {
  try {
    const issues = await Issue.findAll();
    res.status(200).json(issues);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

app.listen(5000, () => console.log('Server listening on port 5000'));
