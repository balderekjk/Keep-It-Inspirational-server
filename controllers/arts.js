require('dotenv').config();
const { Art } = require('../models/art');
const { Op } = require('sequelize');

module.exports = {
  addArt: async (req, res) => {
    try {
      const {
        person_id,
        title,
        media_type,
        privacy,
        media_url,
        description,
        date,
      } = req.body;

      await Art.create({
        person_id,
        title,
        media_type,
        privacy,
        media_url,
        description,
        date,
      });

      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  },
  exploreArts: async (req, res) => {
    try {
      const all = await Art.findAll({
        where: {
          person_id: { [Op.ne]: +req.params.id },
        },
      });
      res.status(200).send(all);
    } catch (err) {
      console.log(err);
    }
  },
  getPersonalArts: async (req, res) => {
    try {
      const personal = await Art.findAll({
        where: {
          person_id: +req.params.id,
        },
      });
      res.status(200).send(personal);
    } catch (err) {
      console.log(req.params);
      console.log(err);
    }
  },
  editDescription: async (req, res) => {
    try {
      const { art_id, description } = req.body;
      await Art.update(
        { description: description },
        {
          where: { art_id: art_id },
        }
      );
    } catch (err) {
      console.log(err);
    }
  },
  getArtInfo: async (req, res) => {
    try {
      const pinpoint = await Art.findOne({
        where: {
          art_id: +req.params.id,
        },
      });
      res.status(200).send(pinpoint);
    } catch (err) {
      console.log(req.params);
      console.log(err);
    }
  },
};
