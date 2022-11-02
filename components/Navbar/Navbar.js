import Image from 'next/image'
import Link from 'next/link'
import NavbarItem from './NavbarItem'
import React, { useEffect, useRef } from 'react'
import { navbarItems } from './data'

function Navbar({ posts }) {
	
	const ref = useRef()

	console.log(posts)

	useEffect(() => {
		const scrollMe = () => {
			if (window.scrollY >= ref.current.offsetHeight) {
				ref.current.classList.add('bg-white', 'shadow-md')
			} else {
				ref.current.classList.remove('bg-white', 'shadow-md')
			}
		}

		window.addEventListener('scroll', scrollMe) 

		return () => window.removeEventListener('scroll', scrollMe)
	}, [])

	return (
		<nav className="fixed w-full z-50 transition-all" ref={ref}>
			<div className="container flex items-center justify-between">
				<Link href="/">
					<Image src="/static/images/logo.png" width="135" height="42" />
				</Link>
				<ul className="flex items-center gap-x-10">
					{navbarItems.map(item => <NavbarItem key={item.id} item={item} />)}
				</ul>
			</div>
		</nav>
	)
}

export default Navbar

Navbar.getInitialProps = async ctx => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts')
	const posts = await res.json()

	return {
		posts
	}
}
