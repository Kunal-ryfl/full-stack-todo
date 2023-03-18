import React from 'react'
import Todos from '~/components/Todos'
import { signIn, signOut, useSession } from "next-auth/react";
import {RxAvatar} from 'react-icons/rx'
import {AiOutlinePoweroff} from 'react-icons/ai'
import Link from 'next/link';

const dashboard = () => {
    const {data:sessionData} = useSession()
      return (
    <div className=' text-white min-h-screen flex  p-2 flex-col items-center  bg-black'> 
       <div className=' text-black flex items-center justify-between px-4 py-4 w-full my-4  md:w-[750px] bg-yellow-600  rounded-xl'>
       <h1 className=' text-3xl'>{sessionData?.user.name}</h1>
<div className=' flex justify-center items-center'>

       <button onClick={()=>signOut()}>
        <AiOutlinePoweroff className=' font-bold text-2xl'/>
       </button>
       <Link href={"/"} >
        <p className=' mx-2'>home</p>
        </Link>
</div>
       
       
       </div>
       <Todos/>

    </div>
  )
}

export default dashboard