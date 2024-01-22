'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import PromptCard from '@componenets/PromptCard'
import UserCard from '@componenets/UserCard'

const RenderResults=({results}) => {
    let renderedPosts
    let renderedUsers
    let noPosts=false
    let noUsers=false
      results.posts ? renderedPosts = results.posts.map((post) => <PromptCard key={post._id} post={post} />) : renderedPosts=<h1 className='text-center'>No Prompts Found</h1>
      results.users ? renderedUsers = results.users.map((user) => <UserCard key={user._id} user={user} />) : renderedUsers=<h1 className='text-center'>No Users Found</h1>
      return(   
      <>
      {renderedUsers}
      {renderedPosts}
      </> )
  }

  function Search() {
  const router = useRouter()
  const [results, setResults] = useState('')
  const searchParams = useSearchParams()
  const searchKey = searchParams.get('query')

  useEffect(() => {
    if (!searchKey) {
      router.push('/');
    } else {
      const getPosts = async () => {
          const res = await fetch(`api/post/search/${searchKey}`);
          setResults(await res.json());
      };
      getPosts();
    }
  }, [searchKey]);

  
  return (
    <div>
      <h1 className="head_text blue_gradient" >
        Search results for '{searchKey}'
      </h1>
      <div className='mt-20 d-flex wrap'>
       {results ? <RenderResults results={results}/> :(
        <div className='d-flex justify-center mt-20 w100 '>
          <div className="loader"></div>
        </div>
        )} 
      </div>
    </div>

  )
}

export default Search