import express from 'express';
import mongoose from 'mongoose';
import config from '../config';
import House from '../models/House';
import Senate from '../models/Senate';

let memberRouter = express.Router();

let query = `
    firstName
    lastName
    middleName
    facebookAccount
    twitterAccount
    youtubeAccount
    currentParty
    url
`;

const mongoUri = `mongodb://${config.db.host}/${config.db.name}`;

mongoose.connect(mongoUri, (error) => {
    if(error){
        return error;
    }
})

memberRouter.post('/fetch-member', (req,res) => {
    let results;
    House.find({memberId: req.body.id})
        .select(query)
        .exec((err, homeDocs) => {
        if(err) throw err;
        results = homeDocs;
        if(results.length > 0) {
            res.json(results);
        }else{
            Senate.find({memberId: req.body.id})
                .select(query)
                .exec((err, senateDocs) => {
                    results = senateDocs;
                    res.json(results);
                })
        }
    })
})

export default memberRouter
