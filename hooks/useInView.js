import React, { memo, useEffect, useRef, useState } from 'react'

function useInView(options = {}) {
	const [inView, setInView] = useState(false)

	const ref = useRef()

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0]

				if (entry.isIntersecting) {
					setInView(true)
				}
			},
			options
		)

        observer.observe(ref.current)

        return () => observer.disconnect()
	}, [])

	return {
        ref,
        inView,
    }
}

export default useInView
