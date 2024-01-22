import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
function UserCard({user}) {
    const router=useRouter()
    const handleCardClick=e=>{
        router.push(`/profile?id=${e}`)
    }
  return (
    <div onClick={()=>handleCardClick(user._id)} className='glassmorphism prompt_card d-flex flex-col align-center gap-10 cursor-pointer'>
        <Image
            src={user.image}
            alt='user_image'
            height={40}
            width={40}
            className='rounded'
        />
        <div>
        <h1 className="green_gradient text-center" style={{fontWeight:'500',fontSize:'20px'}}>
            {user.username}
        </h1>
        <h1 className="text-gray text-center">
            {user.email}
        </h1>
        </div>
      
    </div>
  )
}

export default UserCard