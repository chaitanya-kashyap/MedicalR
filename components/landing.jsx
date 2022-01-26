import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import R from '../public/R.svg'
import Image from 'next/image'
import Link from 'next/link'
import { signOut } from "next-auth/react"


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const navigation = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]
  

export default function Landing() {
    return (
        <div className="min-h-full relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 top-0">
        <Disclosure as="nav" className="bg-white ">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Link href='/'>
                      <Image
                        className="h-8 w-8"
                        src={R}
                        alt="MedicalR"
                      />
                      </Link>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-rose-800 text-white'
                                : 'text-rose-800 hover:bg-rose-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      
                      <Menu as="div" className="ml-3 relative">
                        
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <button className='mx-auto py-1 px-4 text-sm' onClick={() => signOut()}>Sign out</button>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    <Disclosure.Button className="bg-rose-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                
                
                 
                  <div className="mt-3 px-2 space-y-1">
                  <button className='mx-auto py-1 px-4 text-sm' onClick={() => signOut()}>Sign out</button>
                  </div>
                  

                
                    
              </Disclosure.Panel>
                    
            </>
          )}
        </Disclosure>
        </div>
    )
}