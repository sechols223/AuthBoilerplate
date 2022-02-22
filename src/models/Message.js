import { mongoose } from 'mongoose';
const { Schema } = mongoose;

const messageSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId, ref: 'User'
        },

        text: {
            type: String,
            required: true,
        },

    },
    { timestamps: true },
);


const Message = mongoose.model('Message', messageSchema);

module.exports = Message;