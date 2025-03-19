"use client"

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import link from 'next/link';
import { CiMenuFries } from 'react-icons/ci'
import Link from "next/link";

const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "work", path: "/work" },
    { name: "contact", path: "/contact" },
];

const MobileNav = () => {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-enter items-center">
                <CiMenuFries className='text-[32] text-accents' />
                <SheetContent className="flex flex-col">
                    <div className='mt-32 mb-40 text-center text-2xl'>
                        <Link href="/">
                            <h1 className='text-4xl font-semibold'>
                                Fahath
                                <span className='text-accent'>.</span>
                            </h1>
                        </Link>
                    </div>
                    <nav className='flex flex-col justify-center items-center gap-8'>
                        {links.map((link, index) => {
                            return (
                                <Link href={link.path}
                                    key={index}
                                    className={`${link.path == pathname && 'text-headerAccent border-b-4   border-[#03FD9D]'} text-xl capitalize hover:text-accent transition-all`}
                                >
                                    {link.name}
                                </Link>
                            )
                        })}
                    </nav>
                </SheetContent>
            </SheetTrigger>
        </Sheet>

    )
}

export default MobileNav;