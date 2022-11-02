import Link from 'next/link'
import React from 'react'
import { AiOutlineDoubleRight } from 'react-icons/ai'

function Breadcrumb({ title }) {
	return (
		<div className="flex items-center justify-center bg-gray-50 pt-44 pb-36 relative">
			<div className="z-10">
				<h1 className="text-center text-gray-900 font-bold text-5xl drop-shadow-xl">
					{title}
				</h1>
				<ul className="mt-8 flex items-center justify-center gap-x-3">
					<li>
						<Link
							href="/"
							className="text-indigo-600 font-bold text-sm drop-shadow-xl"
						>
							ANASAYFA
						</Link>
					</li>
					<AiOutlineDoubleRight
						className="text-indigo-600 drop-shadow-xl"
						size={12}
					/>
					<li>
						<span className="text-indigo-600 font-bold text-sm drop-shadow-xl">
							{title.toUpperCase()}
						</span>
					</li>
				</ul>
			</div>
			<div className="absolute w-full top-0">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						fill="#f1f5f9"
						fillOpacity="1"
						d="M0,128L48,122.7C96,117,192,107,288,122.7C384,139,480,181,576,213.3C672,245,768,267,864,272C960,277,1056,267,1152,234.7C1248,203,1344,149,1392,122.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
					></path>
				</svg>
			</div>
		</div>
	)
}

export default Breadcrumb
