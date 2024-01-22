import { connectToDB } from "@utils/database";
import { post } from "@models/post";
export const POST = async (req)=>{
    const {userId , prompt , tag} =await req.json();
    try{
        await connectToDB();
        const newPost=new post({userId,prompt,tag})
        await newPost.save()
        return new Response(JSON.stringify(newPost),{status:201})
    }catch (error){
        return new Response('Failed to create new prompt',{status:500})
    }
}