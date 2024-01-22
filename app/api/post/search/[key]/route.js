import { connectToDB } from "@utils/database";
import { post } from "@models/post";
import User from "@models/user";
export const GET = async(req,{params})=>{
    try{
        await connectToDB()
        const postCursor= await post.find({tag:params.key}).populate('userId')
        const userCurosr= await User.find({username:params.key})
        let response={
            posts: postCursor || null,
            users: userCurosr || null
        }
        return new Response(JSON.stringify(response),{status:200})
    }catch(error){
        return new Response('Failed to get prompts',{status:500})
    }
} 