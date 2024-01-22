import { connectToDB } from "@utils/database"
import {Save} from '@models/save'
export const POST=async (req)=>{
    try{
        const {postId,userId}= await req.json()
        await connectToDB()
        const doc=new Save({postId,userId})
        await doc.save()
        if (doc) return new Response('Saved Successfully :)',{status:200})
        else return new Response('some error',{status:404})
    }catch(err){
        return new Response(JSON.stringify(err), {status:500})
    }
}
