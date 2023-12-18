"use client"
import React from "react";
import {
  Navbar,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  PlayCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
  Cog6ToothIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
} from "@heroicons/react/24/outline";
import Image from 'next/image'
import { useRouter } from "next/router";;
import { defaultUser } from "@/models/default.entities";

import logo from '../../../public/logo.png'
import Link from "next/link";



 
export default function ComplexNavbar() {
  const router = useRouter();


  const [isNavOpen, setIsNavOpen] = React.useState(false);

  

  const [currentUser, setCurrentUser] = React.useState(defaultUser);



  

 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);


  const navListItems = [
    {
      label: `Home`,
      icon: HomeIcon,
      route: "/",
    },
  ];



  function NavList() {
    return (
      <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">

        {navListItems.map(({ label, icon, route }, key) => (
          <Typography
            key={label}
            variant="small"
            color="blue-gray"
            className="font-normal"
          >
            <MenuItem className="flex items-center gap-2 lg:rounded-full" onClick={() => router.push(route)}>
              {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
              {label}
            </MenuItem>
          </Typography>
        ))}
        
        
      </ul>
    );
  }

  function HamburgerMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const closeMenu = () => setIsMenuOpen(false);
   
    return (
      <div  className='z-30'>
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
          <MenuHandler>
            <Button
              variant="text"
              color="pink"
              className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
            >
              {/* <Bars3Icon strokeWidth={3} className="h-6 w-6 text-blue-gray-500" /> */}
              {isMenuOpen && (
                <XMarkIcon strokeWidth={3} className="h-7 w-7 text-blue-gray-500" />
    
              ) || (
                <div>
                  <Bars3Icon strokeWidth={2} className="h-7 w-7 text-blue-gray-500 shadow-md opacity-100 z-30" />
                </div>
                
              )}
    
            </Button>
          </MenuHandler>
          <MenuList className="p-1 grad1 z-10 px-8">
          {navListItems.map(({ label, icon, route }, key) => (
            <Typography
              key={label}
              // variant="small"
              color="white"
              className="font-normal"
            >
              <MenuItem className="flex items-center gap-2 p-1 lg:rounded-full">
                <Link href={route} className="flex">
                {React.createElement(icon, { className: "h-[18px] w-[18px] mr-2" })}{" "}{label}
                </Link>
                
              </MenuItem>
            </Typography>
          ))}
          </MenuList>
        </Menu>

      </div>
      
    );
  }


  


  return (
    <>
      <Navbar
      color={"transparent"}
      className="transition-all sticky top-4 py-3 absolute"
      fullWidth
    >
      <div className="flex justify-between z-30 items-center">
        <div className="flex  items-center">
          <HamburgerMenu />
          
          
        </div>
        
        
      </div>
    </Navbar>
    <>
    
      <div className="w-full">
          {/* <!-- <section id="bottom-navigation" className="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"> // if shown only tablet/mobile--> */}
            <section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 grad shadow text-white">
              <div id="tabs" className="flex justify-between">
                
                
                <Link href='/' className="w-full focus:text-fuchsia-500 hover:text-cyan-500 justify-center inline-block text-center py-2">
                  <InformationCircleIcon strokeWidth={1} className="h-8 w-8 inline-block" />
                  <p className="tab tab-home block text-xs">INFO</p>
                </Link>

                <div className="w-full focus:text-cyan-500 hover:text-cyan-500 justify-center inline-block text-center py-2">
                  {currentUser.profile.sound && (<SpeakerWaveIcon strokeWidth={1} className="h-8 w-8 inline-block" />) || (
                    <SpeakerXMarkIcon strokeWidth={1} className="h-8 w-8 inline-block" />
                  )}
                  <p  className="tab tab-explore block text-xs">Sfx</p>
                </div>
               
                  <Button className="w-full focus:text-cyan-500 hover:text-cyan-500 justify-center inline-block text-center py-2">
                    <PlayCircleIcon strokeWidth={1} className="h-8 w-8 inline-block" />
                    <p  className="tab tab-explore block text-xs">PLAY</p>
                  </Button>  
                

                <div className="w-full focus:text-cyan-500 hover:text-cyan-500 justify-center inline-block text-center py-2">
                <Cog6ToothIcon strokeWidth={1} className="h-8 w-8 inline-block" />
                <p  className="tab tab-explore block text-xs">Settings</p>
                
              </div>
 
                <Button className="w-full focus:text-cyan-500 hover:text-cyan-500 justify-center inline-block text-center py-2">
                  <XCircleIcon strokeWidth={1} className="h-8 w-8 inline-block" />
                  <p  className="tab tab-explore block text-xs">EXIT</p>
                </Button>
              </div>
            </section>
          </div></>





          
      
        
      </>

  );
}

