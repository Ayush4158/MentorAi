import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      nahi hai bhai aayesa kuch <Link href={'/'} className='text-blue-600 '> ye click ker homepage ke liye</Link>
    </div>
  )
}

export default NotFound
