const express = require('express');
const router = express.Router();
const config = require ('../../../nuxt.config.js');
const protected = require('express-jwt');

const API_Error = require('../ApiError');

const Effect = require('./Effect');

router.post('/', protected({secret: config.server.jwtSecret}), async (req, res) => {

    try {

        if (!('effect' in req.body)) throw API_Error('INVALID_REQUEST', 'The request was invalid.')

        const effect = new Effect({
            name: req.body.effect.name,
            class: req.body.effect.class,
            subclass: req.body.effect.subclass,
            action: req.body.effect.action,
            substance_class: req.body.effect.substance_class,
            description_formatted: req.body.effect.description,
            replications: req.body.effect.replications,
            related_substances: req.body.effect.substances,
            see_also: req.body.effect.see_also,
            external_links: req.body.effect.external_links,
            citations: req.body.effect.citations
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
        let effects = await Effect.find();

        res.send({effects});
    } catch (error) {
        res.status(500).send({error});
    }

});

router.get('/:name', async (req, res) => {
    try {
        
        let effect = await Effect.findOne({ name: req.params.name }).exec();
        res.send ({ effect });
    } catch (error) {
        res.status(500).send({error});
    }
});

router.post('/:id', async (req, res) => {
    try {
        let updatedEffect = await Effect.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            description_formatted: req.body.description
        }).exec();
        
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

// router.post('/:id', protected({secret: config.server.jwtSecret}), async(req, res) => {

//    try {

//         let post = await Post.findByIdAndUpdate(req.params.id, {
//             title: req.body.title,
//             body: req.body.body
//         }).exec().catch((err) =>  {
//             throw API_Error('POST_SAVE_ERROR', err);
//         });

//         res.send({ post });

//     } catch (error) {
//        res.status(500).send ({ error });
//     }
// });

// router.get('/:id/delete', protected({secret: config.server.jwtSecret}), async(req, res) => {

//     try {

//         let deleted = await Post.findByIdAndRemove(req.params.id).exec().catch((error) => {
//             throw API_Error('DELETE_POST_ERROR', error);   
//         });

//         res.send(deleted);

//     } catch (error) {
//         res.status(500).send({ error });
//     }


// })

// router.get('/:slug', async(req, res) => {

//     try {

//         let post = await Post.findOne({ slug: req.params.slug }).catch((err) => {
//             throw API_Error('POST_NOT_FOUND', err);
//         });

//         res.send({ post });

//     } catch (error) {
//         res.status(500).send({ error });
//     }

// });


// router.get('/', async(req, res) => {
//     try {
//         let posts = await Post
//             .find()
//             .setOptions({
//                 maxTimeMS: 500
//             })
//             .sort({ datetime: 'desc' });
//         res.send({ posts });
//     } catch (error) {
//         res.status(500).send({ error });
//     }

// });


module.exports = router;