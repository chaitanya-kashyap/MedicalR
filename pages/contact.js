import Footer from '../components/footer'
import { useSession, signIn } from "next-auth/react"
import { useRouter } from 'next/router'
import Header from '../components/header';
import Landing from '../components/landing';

export default function About() {

  const { data: session } = useSession();
  const router = useRouter();
  if (session) {
    router.push('/home');
  }

  return (
    <>
    <Landing />
    <div className="bg-white">
      <div className="max-w-7xl container mx-auto py-8 px-4 sm:px-6 lg:py-14 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block text-rose-800 text-6xl">Contact</span>
          <p className='text-md font-normal py-8' >
              In development..
          </p>
          
        </h2>
        
      </div>
    </div>
    <Footer />
    </>
  )
}