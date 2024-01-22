import { connectToDB } from "@utils/database";
import { post } from "@models/post";

// find post GET

export const GET = async(req,{params})=>{
    try{
        await connectToDB()
        const response= await post.findById(params.id).populate('userId')
        // console.log(JSON.stringify(response))
        return new Response(JSON.stringify(response),{status:200})
    }catch(error){
        return new Response('Failed to get prompts',{status:500})
    }
} 

// update post PATCH

export const PATCH = async(req,{params})=>{
    const {prompt,tag}=await req.json()
    console.log('patch requested',params.id,prompt,tag)
    try{
        await connectToDB()
        const response= await post.findByIdAndUpdate(params.id,{$set:{prompt,tag}},{upsert:true}).exec()
        console.log(response)
        return new Response(JSON.stringify(response),{status:200})
    }catch(error){
        return new Response('Failed to get prompts',{status:500})
    }
} 

// delete post DELETE

export const DELETE = async(req,{params})=>{
    try{
        await connectToDB()
        await post.findByIdAndDelete(params.id)
        return new Response('Prompt Deleted',{status:200})
    }catch(err){
        return new Response('Prompt Delete failed',{status:500})

    }
}