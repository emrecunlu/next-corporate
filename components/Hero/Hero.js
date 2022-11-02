import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import useInView from '../../hooks/useInView'

function Hero() {

	const leftSide = useRef()
	const rightSide = useRef()

	const { ref, inView } = useInView()

	useEffect(() => {
		if (inView) {
			leftSide.current.classList.remove('-translate-x-full', 'opacity-0')
			rightSide.current.classList.remove('translate-x-full', 'opacity-0')
		}	
	}, [inView]) 

	return (
		<section ref={ref} className="relative w-full min-h-screen flex items-center justify-center bg-indigo-50 overflow-hidden">
			<div className="container px-10 max-w-7xl flex gap-x-20 items-center">
				<div ref={leftSide} className="flex flex-col gap-y-8 flex-1 -translate-x-full opacity-0 transition-all duration-1000">
					<h1 className="text-gray-900 font-bold text-6xl leading-tight">
						Bespoke Software Development
					</h1>
					<span className="text-gray-400 font-medium leading-relaxed">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
						laudantium reiciendis labore. Doloremque ab inventore laudantium!
					</span>
					<div>
						<Link
							className="bg-indigo-600 text-white rounded-md px-5 py-3 font-semibold"
							href="/contact"
						>
							Get A Started
						</Link>
					</div>
				</div>
				<div className="flex-1 z-10 translate-x-full opacity-0 transition-all duration-1000 delay-500" ref={rightSide}>
					<Image src="/static/images/software-l.png" alt="Hero Banner" width={550} height={550} />
				</div>
			</div>
			<div className="absolute w-full top-0 z-auto">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						fill="#ede9fe"
						fillOpacity="1"
						d="M0,128L48,122.7C96,117,192,107,288,122.7C384,139,480,181,576,213.3C672,245,768,267,864,272C960,277,1056,267,1152,234.7C1248,203,1344,149,1392,122.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
					></path>
				</svg>
			</div>
		</section>
	)
}

export default Hero
