const express = require('express');
const router = express.Router();
const config = require ('../../../nuxt.config.js');
const protected = require('express-jwt');

const API_Error = require('../ApiError');

const Effect = require('./Effect');
const Replication = require('../replications/Replication');

const DocumentParser = require('../../../lib/DocumentParser');
const parser = new DocumentParser();

function kebab(text) {
    return text.toLowerCase().replace(/ /g, '-').replace(/[^0-9a-z\-]/gi, '');
}

router.post('/', protected({secret: config.server.jwtSecret}), async (req, res) => {

    try {

        if (!('effect' in req.body)) throw API_Error('INVALID_REQUEST', 'The request was invalid.')

        let e = req.body.effect;

        const effect = new Effect({
            name: e.name,
            url: kebab(e.name),
            tags: e.tags,
            description_raw: e.description,
            description_formatted: JSON.stringify(parser.parse(e.description)),
            related_substances: e.related_substances,
            see_also: e.see_also,
            external_links: e.external_links,
            citations: e.citations
        })

        let returnedEffect = await effect.save().catch((err) => {
            throw API_Error('EFFECT_SAVE_ERROR', err);
        });

        res.send({ effect: returnedEffect });

    } catch (error) {
        res.status(500).send({ error });
    }

});

router.get('/', async (req, res) => {
    try {
        let effects = await Effect.find().select('name url tags').sort({name: 1}).exec();
        res.send({effects});
    } catch (error) {
        res.status(500).send({error});
    }

});

router.get('/:url', async (req, res) => {
    try {
        let effect = await Effect.findOne({ url: req.params.url }).exec();
        effect = effect.toJSON();
        effect.replications = await Replication.find({ associated_effects: effect._id }).exec();
        res.send ({ effect });
    } catch (error) {
        res.status(500).send({error});
    }
});

router.post('/:id', async (req, res) => {
    try {
        let updatedEffect = await Effect.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            url: kebab(req.body.name),
            description_raw: req.body.description,
            description_formatted: JSON.stringify(parser.parse(req.body.description)),
            related_substances: req.body.related_substances,
            external_links: req.body.external_links,
            see_also: req.body.see_also,
            tags: req.body.tags,
            citations: req.body.citations,
        }, { new: true }).exec();
        
        res.send({ effect: updatedEffect });
    } catch (error) {
        res.status(500).send ({ error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        let deletedEffect = await Effect.findByIdAndRemove(req.params.id).exec();
        res.send({ effect: deletedEffect });
    } catch (error) {
        res.status(500).send ({ error });
    }
});

module.exports = router;