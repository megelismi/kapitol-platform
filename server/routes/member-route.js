import express from 'express';
import mongoose from 'mongoose';
import config from '../config';
import House from '../models/House';
import Senate from '../models/Senate';

let memberRouter = express.Router();

const mongoUri = `mongodb://${config.db.host}/${config.db.name}`;

mongoose.connect(mongoUri, (error) => {
    if(error){
        return error;
    }
})

memberRouter.post('/fetch-member', (req,res) => {
    //...
})

export default memberRouter
