import Image from 'next/image'
import React from 'react'
import 
{ BellIcon,
  ChatIcon,
  GlobeIcon,
  PlusIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  VideoCameraIcon,
} from '@heroicons/react/outline'
import 
{ ChevronDownIcon,
  HomeIcon,
  MenuIcon,
  SearchIcon,
} from '@heroicons/react/solid'
import { signIn, signOut, useSession } from 'next-auth/react'


function Header() {
  const { data : session } = useSession()
  return (
    <div className='z-50 sticky top-0 flex items-center bg-white shadow-sm py-2 px-4'>
      <div className='relative h-10 w-20 flex-shrink-0 cursor-pointer'>
          <Image objectFit="contain" src="https://links.papareact.com/fqy" layout="fill"/>
      </div>
      <div className='flex mx-7 items-center xl:min-w-[300px]' >
          <HomeIcon className='h-5 w-5'/>
          <p className='ml-2 hidden flex-1 lg:inline'>Home</p>
          <ChevronDownIcon className='h-5 w-5'/>
      </div>
      <div className='flex flex-1 items-center space-x-2 border  border-gray-200 
      bg-gray-100 py-1 px-3 rounded-sm'>
        <SearchIcon className='h-6 w-6 text-gray-400'/>
        <input className='flex-1 bg-transparent outline-none' type='text' placeholder='Search Reddit'/>
        <button type='submit' hidden/>
      </div>
      <div className='mx-5 space-x-2 hidden lg:inline-flex items-center text-gray-500'>
        <SparklesIcon className='icon'/>
        <GlobeIcon className='icon'/>
        <VideoCameraIcon className='icon'/>
        <hr className='h-10 border border-gray-100'/>
        <ChatIcon className='icon'/>
        <BellIcon className='icon'/>
        <PlusIcon className='icon'/>
        <SpeakerphoneIcon className='icon'/>
      </div>
      <div className='ml-5 flex items-center lg:hidden'>
          <MenuIcon className='icon'/>
      </div>
      {/* {sign in sign out button} */}
      { session ? (
      <div onClick={() => {signOut()}} className='hidden lg:flex p-2 border border-gray-100 space-x-2 items-center cursor-pointer'>
        <div className='relative h-5 w-5 flex-shrink-0'>
          <Image
          layout="fill"
          src="https://links.papareact.com/23l"
          alt=""
          />
        </div>
        <div className="flex-1 text-xs">
          <p className="truncate">{session?.user?.name}</p>
          <p className="text-gray-400">1 Karma</p>
        </div>
        <ChevronDownIcon className="h-5 flex-shrink-0 text-gray-400" />
      </div>
      ) : (
      <div onClick={() => {signIn()}} className='hidden lg:flex p-2 border border-gray-100 space-x-2 items-center cursor-pointer'>
        <div className='relative h-5 w-5 flex-shrink-0'>
          <Image
          layout="fill"
          src="https://links.papareact.com/23l"
          alt=""
          />
        </div>
        <p>Sign In</p>
      </div>
      )}
    </div>
  )
}

export default Header