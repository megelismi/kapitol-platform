import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const senateSchema = new Schema({
    firstName:{
        type: String
    },
    userId: {
        type: Schema.Types.ObjectId, ref: 'Member'
    }
}, {collection: 'senators'});

const Senate = mongoose.model('Senate', senateSchema);

export default Senate;
