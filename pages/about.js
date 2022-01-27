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
          <span className="block text-rose-800 text-5xl">About Us</span>
          <p className='text-md font-normal py-8' >
            Incididunt sint est ex incididunt dolor. Sint id nulla aliquip in sunt exercitation ex sint enim in consequat. Laboris cillum duis velit reprehenderit consequat irure esse nulla aute consectetur mollit sint quis. Tempor dolore laborum aute aliqua id aliqua enim adipisicing reprehenderit et non.
            Non qui eiusmod excepteur ipsum non tempor do irure amet id veniam pariatur aute proident. Laboris pariatur non aliquip et ut elit tempor ea nulla mollit incididunt excepteur sint non. Adipisicing ad ullamco in minim. Ea eu et id fugiat. Nulla velit pariatur excepteur eu amet ex et elit ut officia id anim laboris est. Lorem officia nulla Lorem veniam nulla sit consequat ullamco.
          </p>
          
        </h2>
        
      </div>
    </div>
    <Footer />
    </>
  )
}