require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { SERVER_PORT } = process.env;
const { register, getAllPersons } = require('./controllers/auth');
const {
  addArt,
  exploreArts,
  getPersonalArts,
  editDescription,
  getArtInfo,
  deleteArt,
} = require('./controllers/arts');
const {
  addJournal,
  getPersonalJournals,
  deleteJournal,
} = require('./controllers/journals');
const { sequelize } = require('./util/database');
const { Person } = require('./models/person');
const { Art } = require('./models/art');
const { Journal } = require('./models/journal');

Person.hasMany(Art, {
  foreignKey: 'person_id',
});
Art.belongsTo(Person, { foreignKey: 'person_id' });

Person.hasMany(Journal, {
  foreignKey: 'person_id',
});
Journal.belongsTo(Person, { foreignKey: 'person_id' });

Art.hasMany(Journal, {
  foreignKey: 'art_id',
});

const app = express();

app.use(express.json());
app.use(cors());

app.get('/persons', getAllPersons);
app.post('/persons', register);
app.post('/arts', addArt);
app.get('/arts/:id', getArtInfo);
app.get('/explore/:id', exploreArts);
app.get('/personal/:id', getPersonalArts);
app.put('/personal/:id', editDescription);
app.post('/journals', addJournal);
app.get('/journals/:id', getPersonalJournals);
app.delete('/journals/:id', deleteJournal);
app.delete('/arts/:id', deleteArt);

sequelize
  .sync()
  .then(() => {
    app.listen(SERVER_PORT, () => {
      console.log(`running on PORT ${SERVER_PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
