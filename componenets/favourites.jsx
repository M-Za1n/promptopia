'use client'

import { useState, useEffect } from 'react'
import PromptCard from './PromptCard'
function Favourites({ id }) {
  const [posts, setPosts] = useState('')
  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch(`api/saved/${id}`)
      if (res.ok) setPosts(await res.json())
    }
    getPosts()
  }, [id])
  return (
    <div>
      <p className="desc">
        Here are all the prompts that you have saved so far
      </p>
      <div className='mt-20 d-flex wrap gap-10'>
        {posts ? posts.map((post) => <PromptCard key={post._id} post={post} />) : (
          <div className="d-flex w100 justify-center mt-20">
            <div className='loader'></div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Favourites