'use client'
import {useState,useEffect} from 'react'
import PromptCard from './PromptCard'

function Personal({id}) {
  const [posts,setPosts]=useState(null)
  useEffect(()=>{
    const getPosts=async()=>{
      const res= await fetch(`api/post/${id}`)
      const allposts=await res.json()
      setPosts(allposts)
    }
    getPosts()
  },[])
  return (
    <div>
    <p className="desc text-center">
      Here are all the prompts that have been created so far
    </p>
    <div className="prompts d-flex wrap justify-center gap-10">
    {posts ? posts.map((post)=><PromptCard key={post._id} post={post}/>):(
      <div className="d-flex w100 justify-center mt-20">
        <div className='loader'></div>
      </div>
      )}
    </div>
    
  </div>
  )
}

export default Personal