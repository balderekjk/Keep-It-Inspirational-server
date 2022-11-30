require('dotenv').config();
const { Person } = require('../models/person');

module.exports = {
  register: async (req, res) => {
    try {
      const { email_address } = req.body;
      const newPerson = await Person.create({ email_address: email_address });
      res.status(200).send({
        email_address: newPerson.dataValues.email_address,
      });
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  },
  getAllPersons: async (req, res) => {
    try {
      const all = await Person.findAll();
      res.status(200).send(all);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  },
};
