import { Fragment } from 'react'
import { Popover, Transition, } from '@headlessui/react'
import { Menu } from '@headlessui/react'
import { useState } from 'react'
import Image from "next/image";
import Link from "next/link"
import Sign from "./connectWallet";



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

// import { Link} from 'react-router-dom'



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
              <Menu.Item as={Link} to='/'>
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
                
               

              </div>
              <div className="px-1 py-1">
               
                <Menu.Item>
                  {({ active }) => (
                    <button
                    className=' text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm'
                      onClick={(e) => {
                        e.preventDefault();
                        setSubmenuVisible2((prev) => !prev);
                      }}
                    >
                      Host
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
                      Events
                    </button>
                  )}
                </Menu.Item>

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
          <Link href="/" className="text-base font-medium text-gray-500 hover:text-white hidden md:block">
              Home
            </Link>

          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
             
            
            <Link href="/dashboard" className="text-base font-medium text-gray-500 hover:text-white sm:hidden md:flex">
              Dashboard
            </Link>
            <Link href="/host" className="text-base font-medium text-gray-500 hover:text-white sm:hidden md:flex">
              Host Event
            </Link>
            <Link href="/active" className="text-base font-medium text-gray-500 hover:text-white sm:hidden md:flex">
              Active Event
            </Link>
            

          </Popover.Group>
          
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            {/* <Link href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Book a free trial
            </Link> */}
           
             <a className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-[#8A42D8] px-4 py-2 text-base font-medium text-black shadow-sm hover:bg-indigo-700"><Sign/></a> 
          </div>
        </div>
      </div>



             
    
    </Popover>

    
  )
}