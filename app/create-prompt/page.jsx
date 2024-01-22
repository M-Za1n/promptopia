'use client';
import Form from '@componenets/Form'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import {useState} from 'react'
function CreatePrompt() {
  const router= useRouter()
  const {data : session} =useSession()
  const [submit, setsubmit] = useState(false)
  const [post, setpost] = useState({
    prompt:'',
    tag:''
  })
  const createPost = async e => {
    e.preventDefault()
    setsubmit(true)
    try{
      let response = await fetch('/api/post/new',{
        method:'POST',
        body: JSON.stringify({
          userId:session?.user.id,
          prompt:post.prompt,
          tag:post.tag
        })
      })
      if(response.ok) router.push('/')
    }catch(ex){
      console.log(ex)
    }finally{
      setsubmit(false)
    }
  }
  return (
    <Form 
      type='Create'
      post={post}
      setPost={setpost}
      submit={submit}
      handleSubmit={createPost}    
    />
  )
}

export default CreatePrompt