const express = require('express');
const router = express.Router();
const config = require('../../../nuxt.config.js');
const secured = require('express-jwt');

const API_Error = require('../ApiError');
const hasRoles = require('../HasRoles');

const Invitation = require('./Invitation');

router.post('/generate', secured({secret: config.server.jwtSecret}), hasRoles(['admin']), async (req, res, next) => {
  let { expiration } = req.body;

  try {

    let invitation = new Invitation({ expiration });
    let returnedInvitation = await invitation.save()
      .catch((err) => { console.log(err); throw API_Error("SAVE_ERROR", "The invitation failed to save."); });
    res.send({ invitation: returnedInvitation });

  } catch (err) {
    next(err);
  }
});

router.delete('/:id', secured({secret: config.server.jwtSecret}), hasRoles(['admin']), async (req, res, next) => {
  try {
    if ('id' in req.params) {
      let id = req.params.id;
      let deletedInvitation = await Invitation.findByIdAndRemove(id).exec();
      res.send(deletedInvitation);
    } else throw API_Error("INVALID_INVITATION_ID", "The invitation ID was invalid.");

  } catch (err) {
    next(err);
  }
});

router.get('/', secured({secret: config.server.jwtSecret}), hasRoles(['admin']), async (req, res, next) => {
  try {
    let invitations = await Invitation.find().exec();
    res.send(invitations);
  } catch (err) {
    next(err);
  }
});

module.exports = router;