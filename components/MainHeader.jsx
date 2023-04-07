import { Fragment } from 'react'
import { Popover, Transition, } from '@headlessui/react'
import { Menu } from '@headlessui/react'
import { useState } from 'react'
import Image from "next/image";
import Link from "next/link"


import {
  // ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  // EnvelopeIcon,
  PlayIcon,
  ShieldCheckIcon,
  // Squares2X2Icon,
  XMarkIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

// import { Link} from 'react-router-dom'




const solutions = [
  
  {
    name: 'Eligibility & Benefit Verification',
    description: ' ',
    href: '/service/eligibility-verification',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Medical Coding',
    description: '',
    href: '/service/medical-coding',
    icon: CursorArrowRaysIcon,
  },

  {
    name: 'Billing, Denial Management & A/R ',
    description: ' ',
    href: '/service/billing-Denial Management-A/R',
    icon: CursorArrowRaysIcon,
  },
 
 
  {
    name: 'Physician Credentialing ',
    description: ' ',
    href: '/service/phycisian-credentialing',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Pre-Authorization',
    description: ' ',
    href: '/service/revenue-cycle-management',
    icon: CursorArrowRaysIcon,
  },
 
]
const callsToAction = [
  { name: 'Contact', href: 'mailto:support@vistarcm.com', target:"_blank", icon: EnvelopeIcon },
]
const resources = [
  {
    name: 'About VistaRCM',
    href: '/aboutvistarcm',
    icon: LifebuoyIcon,
  },
  {
    name: 'Testimonials',
    href: '/about/testimonials',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Careers',
    href: '/about/careers',
    icon: CalendarIcon,
  },

]
const recentPosts = [
  { id: 1, name: 'Solutions for the Revenue Cycle and clinical labor shortage', href: '/about/blogs' },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MainHeader() {
  
  const [open, setOpen] = useState(false);

  const handleClickOpen = () =>{
    setOpen(true);
  }
  const handleClose = () =>{
    setOpen(false);
  }

  const [submenuVisible, setSubmenuVisible] = useState(false);
  const [submenuVisible2, setSubmenuVisible2] = useState(false);

  
  return (
    <Popover className="relative bg-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-4 md:justify-start md:space-x-10">
           <div className="flex justify-start lg:w-0 lg:flex-1">
            {/* <Link to="/"> */}
              <span className="sr-only">Your Company</span>
              {/* <img
                className="h-20 w-48"
                src={logo}
                alt=""
              /> */}
              <Image src="/logo.svg" width="120" height="148">

              </Image>
            {/* </Link> */}
          </div>
          {/*<div className="-my-2 -mr-2 md:hidden">
            
            <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none ">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div> */}
          
          <Menu as="div" className="relative inline-block text-left -my-2 -mr-2 z-[999] md:hidden">
        {({ close, open }) => (
          <Fragment>
            <div >
              <Menu.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none ">
              <span className="sr-only">Options</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Menu.Button>
            </div>
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
              <Menu.Item href='/'>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-violet-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Home
                    </button>
                  )}
                </Menu.Item>
                
                <Menu.Item>
                  {({ active }) => (
                    <button
                    className=' text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm'
                      onClick={(e) => {
                        e.preventDefault();
                        setSubmenuVisible((prev) => !prev);
                      }}
                    >
                      Dashboard
                      {/* <ChevronDownIcon className="h-5 w-5" /> */}
                    </button>
                  )}
                </Menu.Item>
                {submenuVisible && (
                  <Fragment>
                    <Menu.Item as={Link} to='/service/eligibility-verification'>
                      {({ active }) => (
                        <button
                          className=' text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm'

                        >
                          Eligibility & Benefit Verification
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item as={Link} to='/service/medical-coding'>
                      {({ active }) => (
                        <button
                          className=' text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm'

                        >
                          Medical Coding
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item as={Link} to='/service/billing-Denial%20Management-A/R'>
                      {({ active }) => (
                        <button
                          className=' text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm'

                        >
                          Billing, Denial & A/R
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item  as={Link} to='/service/phycisian-credentialing'>
                      {({ active }) => (
                        <button
                          className=' text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm'

                        >
                          Provider Credentialing 
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item  as={Link} to='/service/revenue-cycle-management'>
                      {({ active }) => (
                        <button
                          className=' text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm'

                        >
                          Pre-Authorization
                        </button>
                      )}
                    </Menu.Item>
                  </Fragment>
                )}
              </div>
              <div className="px-1 py-1">
                <Menu.Item href='/about/blogs'>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-violet-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Blogs
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                    className=' text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm'
                      onClick={(e) => {
                        e.preventDefault();
                        setSubmenuVisible2((prev) => !prev);
                      }}
                    >
                      Active Events
                      <ChevronDownIcon className="h-5 w-5" />
                    </button>
                  )}
                </Menu.Item>
                {submenuVisible2 && (
                  <Fragment>
                    <Menu.Item as={Link} to='/aboutvistarcm'>
                      {({ active }) => (
                        <button
                          className=' text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm'

                        >
                          About VistaRCM
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item as={Link} to='/about'>
                      {({ active }) => (
                        <button
                          className=' text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm'

                        >
                          Host Event
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item as={Link} to='/about/testimonials'> 
                      {({ active }) => (
                        <button
                          className=' text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm'

                        >
                          Testimonials
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item as={Link} to='/about/careers'>
                      {({ active }) => (
                        <button
                          className=' text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm'

                        >
                          Careers
                        </button>
                      )}
                    </Menu.Item>
                  </Fragment>
                )}
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href='https://docs.google.com/forms/d/e/1FAIpQLSdPPPSfMK7sKrTi2pAyr-zUbNLAIk1wvHeZJusZYNiWOKRbBA/viewform'
                      className={`${
                        active ? 'bg-violet-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Login/Signup
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Fragment>
        )}
      </Menu>
        {/* desktop navbar */}
          <a href="/" className="text-base font-medium text-gray-500 hover:text-white hidden md:block">
              Home
            </a>

          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              <Popover className="relative">
              {({ open,close }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? '' : '',
                      'group inline-flex items-center rounded-md text-base text-gray-500 font-medium hover:text-white focus:outline-none lg:h-2'
                    )}
                  >
                    <span>Dashboard</span>
                    {/* <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5'
                      )}
                      aria-hidden="true"
                    /> */}
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel  className="absolute z-[999] -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="lg:h-96 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-y:scroll" >
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 scrollbar scrollbar-thumb-rose-500 scrollbar-track-slate-700" >
                          {solutions.map((item) => (
                            <a
                            onClick={()=>{
                              close();
                              console.log('click')
                            }}
                              key={item.name}
                              href={item.href}
                              className=  "-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50" 
                            >
                              <item.icon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                              >
                                <item.icon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                <span className="ml-3">{item.name}</span>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            {/* <a href="/about/blogs" className="text-base font-medium text-gray-500 hover:text-white sm:hidden md:flex">
              Blogs
            </a> */}
            <a href="/about" className="text-base font-medium text-gray-500 hover:text-white sm:hidden md:flex">
              Host Event
            </a>
            {/* <Link to="/about" className="text-base font-medium text-gray-500 hover:text-black ">
              About Us
            </Link> */}

            <Popover className="relative">
              {({ open,close }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? '' : '',
                      'group inline-flex items-center rounded-md text-base font-medium text-gray-500 hover:text-white focus:outline-none'
                    )}
                  >
                    <span>Active Event</span>
                    {/* <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 '
                      )}
                      aria-hidden="true"
                    /> */}
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-[999] mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                              onClick={()=>{
                                close();
                                console.log('click about us')
                              }}
                            >
                              <item.icon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                          {/* <div>
                            <h3 className="text-base font-medium text-gray-500">Blogs</h3>
                            <ul role="list" className="mt-4 space-y-4">
                              {recentPosts.map((post) => (
                                <li key={post.id} className="truncate text-base">
                                  <a href={post.href} className="font-medium text-gray-900 hover:text-gray-700">
                                    {post.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div> */}
                          <div className="mt-5 text-sm">
                            <a href="/about/blogs" className="font-medium text-indigo-600"
                            onClick={()=>{
                              close();
                              console.log('click about us')
                            }}>
                              View all posts
                              <span aria-hidden="true"> &rarr;</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                  {/* <CheckOutsideClick onClickOutside={handleClose}/> */}
                </>
              )}
            </Popover>
          </Popover.Group>
          
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            {/* <Link href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Book a free trial
            </Link> */}
            <Link legacyBehavior
              href="/login"
             
            >
             <a  className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-[#8A42D8] px-4 py-2 text-base font-medium text-black shadow-sm hover:bg-indigo-700">Login/Signup</a> 
            </Link>
          </div>
        </div>
      </div>



             
    
    </Popover>

    
  )
}