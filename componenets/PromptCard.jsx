'use client'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import copyImage from '@public/icons/copy.svg'
import tickImage from '@public/icons/tick.svg'
import saveImage from '@public/icons/bookmark-icon.png'
function PromptCard({ post }) {
  const router = useRouter()
  const pathName = usePathname()
  const [copy, setCopy] = useState("")
  const { data: session } = useSession()
  const handleTagclick = async e => {
    router.push(`/searched-prompts?query=${e}`)
  }
  const handleUserclick = id => {
    router.push(`/profile?id=${id}`)
  }
  const handleEdit = id => {
    router.push(`/update-prompt?id=${id}`)
  }
  const handleDelete = async id => {
    const res = await fetch(`/api/post/${id}/all-route`, {
      method: 'DELETE'
    })
    if (res.ok) router.push('/')
  }
  const handleCopy = async (text) => {
    try {
      setCopy(text);
  
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for browsers that do not support navigator.clipboard.writeText
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
  
      setTimeout(() => {
        setCopy("");
      }, 3000);
    } catch (error) {
      // Handle the error
      console.error('Error copying to clipboard:', error);
    }
  };
  
  const handleSave = async e => {
    const res = await fetch(`/api/saved`, {
      method: 'POST', 
      body: JSON.stringify({
        postId: e,
        userId: session?.user.id
      })
    })
    alert(JSON.stringify(res))
  }
  return (
    <div className='glassmorphism prompt_card'>
      <div className="d-flex justify_between align-center">
        <div className="d-flex align-center cursor-pointer" onClick={() => handleUserclick(post.userId._id)}>
          <Image
            src={post.userId.image}
            height={30}
            width={30}
            className='rounded'
            alt='profile image'
          />
          <div className='ml-10'>
            <h3 className="blue_gradient " style={{ fontSize: '15px', fontWeight: '500' }}>{post.userId.username}</h3>
            <h4 className="text-gray" style={{ fontSize: '13px' }}>{post.userId.email}</h4>
          </div>
        </div>
        <div className="d-flex gap-10">
          <Image src={copy === post.prompt ? tickImage : copyImage} width={15} height={15} onClick={() => handleCopy(post.prompt)} alt='s' />
          {session?.user && <Image src={saveImage} width={15} height={15} onClick={() => handleSave(post._id)} alt='s' /> }

        </div>
      </div>
      <div className='my-10' style={{ fontSize: '14px' }}>
        {post.prompt}
      </div>
      <h3 className="d-flex orange_gradient cursor-pointer" style={{ fontSize: '12px' }} onClick={() => handleTagclick(post.tag)}>
        #{post.tag}
      </h3>
      <div className="w100 d-flex align-center justify_end">
        {session?.user.id === post.userId._id && pathName === '/profile' && (
          <>
            <h1 className="green_gradient cursor-pointer" onClick={() => handleEdit(post._id)}>Edit</h1>
            <h1 className="ml-30 blue_gradient cursor-pointer" onClick={() => handleDelete(post._id)}>Delete</h1>
          </>
        )}
      </div>
    </div>
  )
}

export default PromptCard