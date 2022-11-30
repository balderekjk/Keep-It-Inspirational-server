require('dotenv').config();
const { Journal } = require('../models/journal');
// const { Op } = require('sequelize');

module.exports = {
  addJournal: async (req, res) => {
    try {
      const { title, art_title, person_id, art_id, entry, date } = req.body;

      await Journal.create({
        title,
        art_title,
        person_id,
        art_id,
        entry,
        date,
      });

      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  },
  getPersonalJournals: async (req, res) => {
    try {
      const personal = await Journal.findAll({
        where: {
          person_id: +req.params.id,
        },
      });
      res.status(200).send(personal);
    } catch (err) {
      console.log(req.params);
      console.log(err);
      res.sendStatus(400);
    }
  },
};
