import { connectToDB } from "@utils/database";
import { post } from "@models/post";
export const GET = async()=>{
    try{
        await connectToDB()
        const response= await post.find({}).populate('userId')
        // console.log(JSON.stringify(response))
        return new Response(JSON.stringify(response),{status:200})
    }catch(error){
        return new Response('Failed to get prompts',{status:500})
    }
} 