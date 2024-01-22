import User from "@models/user";
import { connectToDB } from "@utils/database";
 export const GET = async (req,{params})=>{
    try{
        await connectToDB()
        const profile= await User.findById(params.id)
        return new Response(JSON.stringify(profile),{status:200})
    }catch(err){
        return new Response('Failed to get user',{status:500})
    }
 }