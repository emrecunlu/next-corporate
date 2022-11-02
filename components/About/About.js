import Image from 'next/image'
import React from 'react'
import { useRef, useEffect } from 'react'
import useInView from '../../hooks/useInView'
import SectionHeader from '../Section/SectionHeader'
import { MdOutlineDownloadDone } from 'react-icons/md'

function About() {
	const leftSide = useRef()
	const rightSide = useRef()

	const { ref, inView } = useInView({
		threshold: .5
	})

	useEffect(() => {
		if (inView) {
			leftSide.current.classList.remove('-translate-x-full', 'opacity-0')
			rightSide.current.classList.remove('translate-x-full', 'opacity-0')
		}
	}, [inView])

	return (
		<section className="py-40 bg-indigo-50 overflow-hidden" ref={ref}>
			<div className="container flex justify-between gap-x-20">
				<div
					className="flex-1 -translate-x-full opacity-0 transition-all duration-1000"
					ref={leftSide}
				>
					<Image
						src="/static/images/about-us.png"
						width={500}
						height={500}
						alt="About Us"
						className="animate-pulse"
					/>
				</div>
				<div
					className="flex-1 translate-x-full opacity-0 transition-all delay-500 duration-1000"
					ref={rightSide}
				>
					<SectionHeader
						name="About Us"
						title="Some Beautyful Features Of Our Software"
						description="Web-enabled deliverables without enterprise strategic theme are backwarsd-compatible process improvements thenabled deliverib without enterprise strategic theme areas."
					/>
					<ul className="flex flex-col mt-8 gap-y-6">
						<li className="flex items-center gap-x-4">
							<MdOutlineDownloadDone className="text-indigo-400" size={25} />
							<span className="text-gray-900 font-medium">
								Deos et accusamus et iusto odio
							</span>
						</li>
						<li className="flex items-center gap-x-4">
							<MdOutlineDownloadDone className="text-indigo-400" size={25} />
							<span className="text-gray-900 font-medium">
								Deos et accusamus et iusto odio
							</span>
						</li>
						<li className="flex items-center gap-x-4">
							<MdOutlineDownloadDone className="text-indigo-400" size={25} />
							<span className="text-gray-900 font-medium">
								Deos et accusamus et iusto odio
							</span>
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default About
