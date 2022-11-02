import Link from 'next/link'
import React, { memo, useEffect, useMemo, useRef } from 'react'
import useInView from '../../hooks/useInView'

function ServiceCard({ service, number }) {

	const { ref, inView } = useInView({
		threshold: 1
	})

	useEffect(() => {
		if (inView) {
			ref.current.classList.remove('opacity-0')
		}
	}, [inView])

	return (
		<article
			ref={ref}
			className="shadow-xl border border-gray-100 shadow-indigo-50 roundend-md overflow-hidden group  transition-all opacity-0 duration-700" 
			style={{ transitionDelay: ((number + 1) / 3) * 300 + 'ms' }} 
		>
			<Link
				href="/"
				className="block p-10 group-hover:bg-indigo-500 group-hover:rounded-md transition-all"
			>
				<div className="fancy relative mb-16 mt-8">
					<span className="text-4xl text-indigo-600 flex justify-center z-20 relative">
						{service.icon}
					</span>
				</div>
				<h1 className="font-semibold text-gray-900 text-center text-xl group-hover:text-white transition-all">
					{service.title}
				</h1>
				<p className="text-gray-400 leading-normal mt-3 text-center group-hover:text-white transition-all">
					{service.detail}
				</p>
			</Link>
		</article>
	)
}

export default memo(ServiceCard)
