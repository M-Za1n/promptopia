import {model,models,Schema} from 'mongoose'

const saveSchema= new Schema({
    postId:{
        required:[true,'post Id is required'],
        unique:[true,'Prompt Already saved'],
        type:Schema.Types.ObjectId,
        ref:'post'
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
})
export const Save= models.Save || model('Save',saveSchema)

