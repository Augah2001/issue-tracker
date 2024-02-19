'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classnames from 'classnames'


const Navbar = () => {

  const currentPathname = usePathname()  
  const links = [
    { label: "Dshboard", href: "/" },
    { label: "Issues", href: "/Issues" },
  ];
  return (
    <div className="flex space-x-4 mb-4 px-4 items-center border-b-2 h-14">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link className={classnames({
                'text-zinc-900': currentPathname === link.href,
                'text-zinc-500': currentPathname !== link.href, 
                'hover:text-zinc-800': true
            })} href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
