const express = require('express');
const router = express.Router();
const config = require('../../../nuxt.config.js');
const secured = require('express-jwt');

const API_Error = require('../ApiError');
const hasPerms = require('../HasPerms');

const Invitation = require('./Invitation');
const User = require('../users/User.js');

router.post('/generate', secured({secret: config.server.jwtSecret}), hasPerms('admin'), async (req, res, next) => {
  const { user } = req;
  try {
    const { _id } = user;
    const creator = await User.findById(_id);
    const invitation = new Invitation({
      createdBy: creator._id
    });

    const saved = await invitation.save();

    if (!saved) {
      throw API_Error('SAVE_ERROR', 'The invitation failed to save.');
    }

    res.send({ code: saved._id });
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', secured({secret: config.server.jwtSecret}), hasPerms('admin'), async (req, res, next) => {
  try {
    if ('id' in req.params) {
      const { id } = req.params;
      await Invitation.findByIdAndRemove(id).exec();
      res.sendStatus(200);
    } else throw API_Error("INVALID_INVITATION_ID", "The invitation ID was invalid.");

  } catch (err) {
    next(err);
  }
});

router.get('/', secured({secret: config.server.jwtSecret}), hasPerms('admin'), async (req, res, next) => {
  try {
    const invitations = await Invitation
      .find()
      .populate('usedBy createdBy')
      .exec();
    res.send({ invitations });
  } catch (err) {
    next(err);
  }
});

module.exports = router;