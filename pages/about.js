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
          <span className="block text-rose-800 text-6xl">About Us</span>
          <p className='text-md font-normal py-8' >
          The project aims to create a “Centralized Digital Electronic Medical Records” which can be used by hospitals. An electronic (digital) collection of medical information about a person that is stored on a computer. <span> </span> An electronic medical record includes information about a patient’s health history, such as diagnoses, medicines, tests, allergies, immunizations, and treatment plans. Electronic medical records can be seen by all healthcare providers who are taking care of a patient and can be used by them to help make recommendations about the patient’s care. Also called EHR and electronic health record.

The application will be using a private permissioned blockchain which will be regulated by the government. 

          </p>
          
        </h2>
        
      </div>
    </div>
    <Footer />
    </>
  )
}