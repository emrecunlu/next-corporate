import Link from 'next/link'
import { RiArrowDropDownLine } from 'react-icons/ri' 
import React from 'react'

function NavbarItem({ item }) {
  return (
    <li className="relative group">
        <Link className="font-semibold text-lg text-gray-900 flex py-8 items-center gap-x-2" href={item.slug}>
            {item.title}
            {item?.children && <RiArrowDropDownLine className="text-gray-500" size={24} />}
        </Link>
        {item?.children && (
            <ul className="absolute w-full min-w-[250px] bg-white border border-gray-100 shadow-xl invisible group-hover:visible rounded-md overflow-hidden">
                {item.children.map(child => (
                    <li key={child.id}>
                        <Link className="text-gray-500 font-semibold px-4 py-3 block hover:text-white hover:bg-indigo-600 transition overflow-hidden" href={child.slug}>
                            {child.title}
                        </Link>
                    </li>
                ))}
            </ul>
        )}
    </li>
  )
}

export default NavbarItem