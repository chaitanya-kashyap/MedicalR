import 'tailwindcss/tailwind.css'
import Image from 'next/image'
import R from '../public/R.svg'
import Link from 'next/link'
import Head from 'next/head'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { DeviceMobileIcon, DocumentDuplicateIcon, ShieldCheckIcon, LockClosedIcon } from '@heroicons/react/outline'
import Footer from '../components/footer'
import { useSession, signIn } from "next-auth/react"
import { useRouter } from 'next/router'


const features = [
  {
    name: 'Digital Medical Records',
    description: 'This application targets hospitals to store records digitally rather than creating physical records.',
    icon: DocumentDuplicateIcon,
  },
  {
    name: 'Blockchain enabled',
    description: 'The records stored of patients is completely secured by Blockchain, the best security for storing data.',
    icon: LockClosedIcon,
  },
  {
    name: 'Safe and Secure ',
    description: 'The application offers secure and safe environment connected to offical hospital accounts so that all the transaction takes place from official institute.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Progressive Web App',
    description: 'For users those are sometimes time dependent for usage this application provides native app experience in their mobile without taking any space and working like a official app.',
    icon: DeviceMobileIcon,
  },
]

const navigation = [
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Home() {

  const { data: session } = useSession();
  const router = useRouter();
  if (session) {
    router.push('/home');
  }

  return (
    <>
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Head>
            <title>MedicalR</title>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="theme-color" content="#ffffff" />
         </Head>

          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                      <span className="sr-only">Medical</span>
                      <Image
                        className="h-8 w-auto sm:h-10"
                        src={R}
                      />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                      {item.name}
                    </a>
                  ))}
                  <button className="font-medium ml-6 text-rose-800 hover:text-rose-700" onClick={() => signIn()}>
                      Sign in
                    </button>  
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <Image
                        className="h-8 w-auto"
                        src={R}
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-800">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <button className="pb-4 font-medium ml-5 text-rose-800 hover:text-rose-700" onClick={() => signIn()}>
                      Sign in
                    </button>  

                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Digital safe for</span>{' '}
                <span className="block text-rose-800 xl:inline">Medical records</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              The application is entirely based on the
              <br></br>
               electronic health records of patients.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <div className='className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-800 hover:bg-rose-800 md:py-4 md:text-lg md:px-10"' >

                  
                  <button onClick={() => signIn()}>
                    Get started
                  </button>
                  </div>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-rose-800 bg-rose-100 hover:bg-rose-200 md:py-4 md:text-lg md:px-10"
                  >
                    <Link href="/doctors">For Doctors</Link>
                    
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
      </div>
    </div>

    <div className="py-12 bg-white container mx-auto px-1">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          A better way to store records
        </p>
        {/* <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          
        </p> */}
      </div>

      <div className="mt-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 pt-6 md:gap-x-8 md:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt className='pt-4'>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-rose-800 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>
    <Footer />
  </>
    
  )
}
