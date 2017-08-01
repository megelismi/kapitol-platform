import express from 'express';
import mongoose from 'mongoose';
import config from '../config';
import House from '../models/House';
import Senate from '../models/Senate';
import socketHandler from '../handlers/socketHandler';

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

homeRouter.get('/emit-test', (req,res) => {

    let socketServer = new socketHandler(process.env.KAPITOL_TINMAN_PORT); //TO BE SET AS WHATEVER SERVER

    socketServer.emitTest({
        firstName: 'Bernard',
        lastName: 'Sanders'
    });
})


export default homeRouter;
