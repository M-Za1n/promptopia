'use client'
import { useEffect, useState } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'
function Nav() {
  const { data: session } = useSession()
  const [toggleDropDown, setToggleDropDown] = useState(false)
  const [providers, setProviders] = useState(null)
  useEffect(() => {
    const setProvider = async () => {
      const response = await getProviders()
      setProviders(response)
    }
    setProvider()
  }, [])
  return (
    <nav className='flex-between w-full px-30'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image src={'/images/logo.svg'} width={30} height={30} className='object-contain' alt='promptopia logo' />
        <p className='ml-10 logo_text'>Promtopia</p>
      </Link>
      <div className='hidden md-flex '>
        {session?.user ? (<div className='flex gap-10' style={{ display: 'flex' }}>
          
          <span>
            <Link href='/create-prompt' className='black_btn'>
              Create Post
            </Link>
          </span>
          <span>
            <button type='button' onClick={signOut} className='outline_btn'>
              Sign Out
            </button>
          </span>
          <span>
            <Link href={'/profile'}>
              <Image
                src={session?.user.image}
                width={30}
                height={30}
                className='rounded'
                alt='profile image'
              />
            </Link>
          </span>
        </div>) : (<>
          {providers && Object.values(providers).map(provider =>
          (<button className='black_btn' type='button' key={provider.id} onClick={() => signIn(provider.id)}>
            Sign In
          </button>))}
        </>)}
      </div>
      <div className="show">
        {session?.user ? (<>
        <Image
          src={session?.user.image}
          height={30}
          width={30}
          className='rounded'
          alt={'user profile'}
          onClick={() => { setToggleDropDown(pre => !pre) }}
        />
          {toggleDropDown && (
          <div className="dropdown">
            <Link href='/profile' onClick={() => { setToggleDropDown(false) }}>
              My profile
            </Link>
            <Link href='/profile' onClick={() => { setToggleDropDown(false) }}>
              Create Post
            </Link>
            <button type='button' className='black_btn' onClick={signOut}>
              Sign out
            </button>
          </div>)
        }
        </>)
        :
        (<>
        {providers && Object.values(providers).map(provider =>
        (<button className='black_btn' type='button' key={provider.id} onClick={() => signIn(provider.id)}>
          Sign In
        </button>))}
      </>)}
        </div>
    </nav>
  )
}

export default Nav