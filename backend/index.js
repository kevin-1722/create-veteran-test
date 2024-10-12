const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const veteranRoutes = require('./routes/routes');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/veterans')
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.log(error));

app.use('/', veteranRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});