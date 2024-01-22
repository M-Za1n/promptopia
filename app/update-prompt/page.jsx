'use client';
import Form from '@componenets/Form'
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react'
function UpdatePrompt() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const _id = searchParams.get('id')
  const [submit, setsubmit] = useState(false)
  const [post, setpost] = useState({
    prompt: '',
    tag: ''
  })

  useEffect(() => {
    const searchPrompt = async e => {
      const res = await fetch(`api/post/${_id}/all-route`, {
        method: 'GET'
      })
      setpost(await res.json())

    }
    searchPrompt()
  }, [_id])

  const updatePost = async e => {
    e.preventDefault()
    setsubmit(true)
    try {
      let response = await fetch(`api/post/${_id}/all-route`, {
        method: 'PATCH',
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag
        })
      })
      if (response.ok) router.push('/')
    } catch (ex) {
      console.log(ex)
    } finally {
      setsubmit(false)
    }
  }

  return (
    <Form
      type='Modify'
      post={post}
      setPost={setpost}
      submit={submit}
      handleSubmit={updatePost}
    />
  )
  
}

export default UpdatePrompt