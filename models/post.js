import {model,Schema,models} from 'mongoose';
const postSchema= new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    prompt:{
        type:String,
        required:[true,'Prompt is required']
    },
    tag:{
        type:String,
        required:[true,'tag is required']
    }
})

export const post = models.post || model('post',postSchema);