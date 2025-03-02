import { Toaster } from 'sonner'
import PasswordForm from './form'
import { isLoggedIn } from '@/actions/auth'
import { redirect } from 'next/navigation'
import Image from 'next/image'

async function page() {
  const isLogged = await isLoggedIn()

  if (isLogged) {
    return redirect('/')
  }

  return (
    <>
      <div className='w-screen h-screen flex'>
        <div className='w-1/2 h-screen flex items-center justify-center relative'>
          <Image src='/password.png'
            className='object-cover'
            quality={100}
            priority
            alt='home' fill />
        </div>
        <div className='md:w-1/2 w-full h-full flex flex-col items-center justify-center'>
          <PasswordForm />
          <p className='bg-blue-800 text-white px-5
          py-2 rounded-lg mt-5 max-w-xs mx-auto text-sm  text-balance'>
            This page is password-protected. Please contact the person who shared KnoCard with you for access and a guided presentation.
          </p>
          <div className='mt-auto mb-10'>

            <Image
              src={'/pop-presentations-logo.png'}
              alt='Pop Presentations'
              width={200}
              height={40}
            />
          </div>
        </div>
      </div >
      <Toaster position='top-center' />
    </>
  )
}

export default page