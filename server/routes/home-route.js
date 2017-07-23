import express from 'express';
import mongoose from 'mongoose';
import config from '../config';
import House from '../models/House';
import Senate from '../models/Senate';

let homeRouter = express.Router();

const mongoUri = `mongodb://${config.db.host}/${config.db.name}`;

mongoose.connect(mongoUri, (error) => {
    if(error){
        return error;
    }
})

homeRouter.get('/member-list', (req,res) => {

    let results;

    House.find({})
        .select('firstName lastName memberId -_id')
        .exec((err, houseDocs) => {
            Senate.find({})
                .select('firstName lastName memberId -_id')
                .exec((err, senateDocs) => {
                    let Docs = houseDocs.concat(senateDocs);
                    results = Docs;
                    res.json(results);
                })
        })
})


export default homeRouter;
