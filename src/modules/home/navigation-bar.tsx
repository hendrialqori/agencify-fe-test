import React from "react"
import { motion } from "framer-motion"
import * as Icon from "#/assets/icon"
import { MdOutlineClose } from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Flow from "#/components/control-flow";
import {
   Menu, MenuItem,
   AccordionProvider, Accordion, AccordionMenu, AccordionMenuItem, AccordionTrigger, AccordionTriggerIcon
} from "#/components/ui/menu";

import type { Submenu } from "#/@type"
import { MENUS } from "#/constant";


export default function NavigationBar() {
   const [popoverMenu, setPopoverMenu] = React.useState<string | null>("")
   const [expandMobile, setExpandMobile] = React.useState(false)

   function handleShowPopover(key: string) {
      return () => setPopoverMenu(key)
   }

   function handleHidePopover() {
      setPopoverMenu(null)
   }

   function handleToggleMobileNav() {
      setExpandMobile(prev => !prev)
   }

   return (
      <React.Fragment>
         <header className="py-4 md:py-6 shadow-md">
            <nav className="container flex items-center justify-between">
               <div aria-label="logo">
                  <Icon.Logo className="w-24 md:w-36" />
               </div>
               <Menu className="hidden md:flex gap-x-14">
                  {MENUS.map((menu, i) => (
                     <Flow key={i}>
                        <Flow.If condition={Boolean(menu.submenu)}>
                           <MenuItem
                              {...menu.submenu && ({
                                 onMouseEnter: handleShowPopover(menu.key as string),
                                 onMouseLeave: handleHidePopover
                              })}
                           >
                              <div className="cursor-pointer center-flex gap-2">
                                 <p className={`font-medium ${menu.isActive ? "text-primary" : "text-black"}`}>
                                    {menu.title}
                                 </p>
                                 <Icon.DownAngle className="translate-y-[2px]" />
                              </div>
                              <PopoverSubMenu
                                 isShow={popoverMenu == menu.key}
                                 submenu={menu.submenu!}
                              />
                           </MenuItem>
                        </Flow.If>
                        <Flow.Else>
                           <MenuItem>
                              <p className={`font-medium ${menu.isActive ? "text-primary" : "text-black"}`}>
                                 {menu.title}
                              </p>
                           </MenuItem>
                        </Flow.Else>
                     </Flow>
                  ))}
               </Menu>

               {/* call to action button 
                  note: only show when desktop version
               */}
               <button
                  className="hidden md:center-flex bg-primary gap-3 rounded-[32px] px-5 py-2"
                  aria-label="call to action"
               >
                  <Icon.RightArrow className="w-6" />
                  <span className="font-medium text-sm text-white">Demander un devis</span>
               </button>

               {/* trigger mobile navigation button
                  note: only show when mobile version
               */}
               <button className="block md:hidden h-8" onClick={handleToggleMobileNav} aria-label=" icon">
                  {expandMobile ? <MdOutlineClose className="text-2xl" /> : <Icon.Hamburger className="w-7" />}
               </button>
            </nav>
         </header>

         {/* mobile navigation */}
         <MobileNavigation expand={expandMobile} />
      </React.Fragment >
   )
}

function MobileNavigation({ expand }: { expand: boolean }) {
   return (
      <React.Fragment>
         <motion.div
            initial={{ y: 0 }}
            animate={{ y: expand ? 0 : "10px" }}
            transition={{ bounce: false, duration: 0.2 }}
            className="h-3 w-full bg-white"
         />
         <motion.ul
            className="block md:hidden px-6 py-4 overflow-hidden bg-white"
            initial={{ height: 0 }}
            animate={{ height: expand ? "max-content" : 0 }}
            transition={{ bounce: false }}
         >
            <AccordionProvider>
               {MENUS.map((menu, i) => (
                  <Flow key={i}>
                     <Flow.If condition={Boolean(menu.submenu)}>
                        <Accordion>
                           <AccordionTrigger accordionKey={menu.key as string}>
                              <p className={`font-medium ${menu.isActive ? "text-primary" : "text-black"}`}>
                                 {menu.title}
                              </p>
                              <AccordionTriggerIcon accordionKey={menu.key as string} />
                           </AccordionTrigger>

                           <AccordionMenu accordionKey={menu.key as string}>
                              {menu.submenu?.map((submenu, i) => (
                                 <AccordionMenuItem key={i} {...submenu} />
                              ))}
                           </AccordionMenu>
                        </Accordion>
                     </Flow.If>
                     <Flow.Else>
                        <Accordion>
                           <p className={`font-medium ${menu.isActive ? "text-primary" : "text-black"}`}>
                              {menu.title}
                           </p>
                        </Accordion>
                     </Flow.Else>
                  </Flow>
               ))}
            </AccordionProvider>
         </motion.ul>
      </React.Fragment>
   )
}

function PopoverSubMenu({ isShow, submenu }: { isShow: boolean, submenu: Submenu[] }) {
   if (!isShow) return null
   return (
      <motion.div
         initial={{ top: "2rem" }}
         animate={{ top: "1.50rem" }}
         exit={{ top: "2rem" }}
         transition={{ duration: 0.1, bounce: false }}
         className="absolute w-full"
         aria-label="popover"
      >
         <div
            className="bg-white rounded-3xl w-max overflow-hidden popover-shadow translate-y-5"
            aria-label="popover-content"
         >
            {submenu.map((menu, i) => (
               <div key={i}
                  className="flex gap-3 pl-8 pr-24 py-4 cursor-pointer hover:bg-gray-100 transition-colors duration-300"
               >
                  {menu.icon}
                  <div className="relative -space-y-[1px]" aria-label="label">
                     <p className="font-medium">{menu.title}</p>
                     <p className="text-xs font-medium text-[#868686]">{menu.subtitle}</p>
                  </div>
                  {menu.badge && (
                     <div className="absolute top-5 right-10 center-flex gap-1 bg-green-100 rounded-full py-[2px] px-[4px]">
                        <RiVerifiedBadgeFill className="text-[14px] text-[#0AC45F]" />
                        <p className="text-[10px] font-medium text-nowrap text-[#0AC45F]">La plus populaire</p>
                     </div>
                  )}
               </div>
            ))}
         </div>
      </motion.div>
   )
}