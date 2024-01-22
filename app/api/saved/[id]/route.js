import { connectToDB } from "@utils/database"
import {Save} from '@models/save'
import { post } from "@models/post"
export const GET=async (req,{params})=>{
    try{
        await connectToDB()
        const result=await Save.find({userId:params.id})
        if (result) {
            const getPrompt = async (id) => {
              const prompt = await post.findById(id).populate("userId");
              return prompt; 
            };
            const res = await Promise.all(result.map((doc) => getPrompt(doc.postId)));            
            return new Response(JSON.stringify(res),{status:200})
        }
        else return new Response('some error',{status:404})
    }catch(err){
        return new Response(JSON.stringify(err), {status:500})
    }
}