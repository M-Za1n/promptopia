'use client'
import {useState,useEffect} from 'react'

import PromptCard from './PromptCard'
import { useRouter } from 'next/navigation'

function Feed() {
  const router = useRouter()
  const [searchKey, setsearchKey] = useState('')
  const [posts,setPosts]=useState(null)
  const handleSubmit=e=>{
    e.preventDefault()
    router.push(`/searched-prompts?query=${searchKey}`)
  }
  useEffect(()=>{
      const getPosts=async ()=>{
        const response= await fetch('api/post')
        setPosts(await response.json())
        
      }
      getPosts()
  },[])
  return (
    <section className='w100 d-flex flex_col'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter tag or username here' className='peer search_input' onChange={e=>{setsearchKey(e.target.value)}} value={searchKey}/>
      </form>
    <div className='mt-20 d-flex wrap gap-10'>
    {posts ? posts.map((post)=><PromptCard key={post._id} post={post}/>):(
      <div className="d-flex w100 justify-center mt-20">
        <div className='loader'></div>
      </div>
      )}
    </div>
    </section>
  )
}

export default Feed