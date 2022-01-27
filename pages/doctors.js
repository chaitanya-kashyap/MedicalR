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
          <span className="block text-rose-800 text-6xl">For Doctors</span>
          <p className='mt-2 text-3xl leading-8 font-normal tracking-tight text-gray-900 py-8 sm:text-4xl' >
          On the care provider’s side, most EMR provide physicians with health analytics that help recognize patterns, predict diagnosis and recommend potential treatment options. These analytics lead to more successful overall patient results the first time, rather than simply relying on trial-and-error methods.
On the patient’s side, they have access to patient portals, which give them access to historical medical information such as lab and imaging results, medications, diagnoses and more. Patients can communicate with their physicians by sharing notes, exchanging instant messages and even video calling.
Both physicians and patients can use the portal to track an individual’s treatment progress. This also makes preventive care easier.


          </p>
          
        </h2>
        
      </div>
    </div>
    <Footer />
    </>
  )
}