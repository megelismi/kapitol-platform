import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const houseSchema = new Schema({
    firstName:{
        type: String
    },
    userId: {
        type: Schema.Types.ObjectId, ref: 'Member'
    }
}, {collection: 'house'});

const House = mongoose.model('House', houseSchema);

export default House;
