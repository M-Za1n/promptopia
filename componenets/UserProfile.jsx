'use client'
import {useState} from 'react'
import Personal from './personal'
import Info from './info'
import Favourites from './favourites'
import { useSession } from 'next-auth/react'
function UserProfile({user}) {
  const {data:session}=useSession()
  const [pageNumber,setPageNumber]=useState('1')
  const handlePage=e=>{
     setPageNumber(e)
  }
  return (
    <>
    <div className='d-flex align-center justify-center'>
      <h1 style={{fontWeight:'500'}} className={pageNumber==='1' ? 'orange_gradient cursor-pointer':'cursor-pointer'} onClick={()=>handlePage('1')}>Info</h1>
      <h1 style={{fontWeight:'500'}} className={pageNumber==='2' ? 'ml-30 orange_gradient cursor-pointer':'ml-30 cursor-pointer'} onClick={()=>handlePage('2')}>Prompts</h1>
      {session?.user.id===user._id &&
      <h1 style={{fontWeight:'500'}} className={pageNumber==='3' ? 'ml-30 orange_gradient cursor-pointer':'ml-30 cursor-pointer'} onClick={()=>handlePage('3')}>Saved</h1>
      }
    </div>
    <span className='line'></span>
    <div>
    {pageNumber==='1' && <Info user={user}/>}
    {pageNumber==='2' && <Personal id={user._id}/>}
    {pageNumber==='3' && <Favourites id={user._id}/>}

    </div>
    </>
  )
}

export default UserProfile