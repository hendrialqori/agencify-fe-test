import React from "react"
import { motion } from "framer-motion";
import { merge } from "#/lib/utils"
import { Submenu } from "#/@type";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { DownAngle } from "#/assets/icon";

type AccordionStoreType = {
    accordion: string;
    onSelectAccordion: (key: string) => void
}

const AccordionContext =
    React.createContext<AccordionStoreType>({} as AccordionStoreType)

export const useAccordion = () => React.useContext(AccordionContext)

export const Menu = React.forwardRef<HTMLUListElement, React.ComponentPropsWithoutRef<"ul">>(({ ...props }, refs) => {
    return (
        <ul ref={refs} {...props} />
    )
})

Menu.displayName = "Menu"

export const MenuItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<"li">>(({ className, ...props }, refs) => {

    return (
        <li ref={refs} className={merge("relative h-max", className)} {...props} aria-label="menu item" tabIndex={-1} />
    )
})

MenuItem.displayName = "MenuItem"


export function AccordionProvider({ children }: { children: React.ReactNode }) {
    const [accordion, setAccordion] = React.useState<string>("")
    function selectAccordion(key: string) {
        if (accordion === key) return setAccordion("")
        setAccordion(key)
    }
    return (
        <AccordionContext.Provider
            value={{ accordion, onSelectAccordion: selectAccordion }}
        >
            {children}
        </AccordionContext.Provider>
    )
}

export function Accordion({ children }: { children: React.ReactNode }) {
    return (
        <li className="py-4 border-b border-[#ABABAB]/50">
            {children}
        </li>
    )
}

export function AccordionMenu({ accordionKey, children }:
    { accordionKey: string; children: React.ReactNode }) {

    const { accordion } = useAccordion()
    return (
        <motion.div
            initial={{ height: 0 }}
            animate={{ height: accordion === accordionKey ? "max-content" : 0 }}
            className="overflow-hidden"
            aria-label="accordion-menu"
        >
            {children}
        </motion.div>
    )
}


export function AccordionTrigger({ accordionKey, children }: { accordionKey: string; children: React.ReactNode }) {
    const { onSelectAccordion } = useAccordion()
    return (
        <div
            className="center-flex justify-between"
            onClick={() => onSelectAccordion(accordionKey)}
            aria-label="accordion-menu-trigger"
        >
            {children}
        </div>
    )
}

export function AccordionTriggerIcon({ accordionKey }: { accordionKey: string }) {
    const { accordion } = useAccordion()

    return (
        <DownAngle className={`${accordionKey === accordion ? "-rotate-90" : "rotate-0"}`} />
    )
}

export function AccordionMenuItem({ icon, title, subtitle, badge }: Submenu) {
    return (
        <div
            className="relative center-flex justify-start gap-2 py-4"
            aria-label="dropdown-content"
        >
            {icon}
            <div aria-label="label">
                <div className="center-flex justify-start gap-2">
                    <p className="text-sm font-medium">{title}</p>
                    {badge && (
                        <div className="center-flex gap-2 bg-green-100 rounded-full py-[2px] px-[4px]">
                            <RiVerifiedBadgeFill className="text-[12px] text-[#0AC45F]" />
                            <p className="text-[8px] font-semibold text-nowrap text-[#0AC45F]">La plus populaire</p>
                        </div>
                    )}
                </div>
                <p className="text-xs font-medium text-[#868686]">{subtitle}</p>
            </div>
        </div>
    )
}

