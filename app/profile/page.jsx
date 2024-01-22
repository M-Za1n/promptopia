'use client'

import {useEffect,useState} from 'react'
import { useSession } from 'next-auth/react'
import { useParams, useRouter,useSearchParams } from 'next/navigation'
import UserProfile from '@componenets/UserProfile'

function Profile() {
    const [user,setUser]=useState('')
    const {data:session}=useSession()
    const searchParams=useSearchParams()
    let id= searchParams.get('id')
    if(!id){
      id= session?.user.id
    }
    useEffect(()=>{
      const getUser=async ()=>{
        if(id){
          const res=await fetch(`api/user/${id}`)
          setUser(await res.json())
        }
      }
      getUser()
    },[id])
    return (
    <UserProfile
        user={user}
    />
  )
}

export default Profile