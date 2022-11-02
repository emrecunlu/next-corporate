import classNames from 'classnames'
import React from 'react'

function SectionHeader({ name, title, description, center }) {

	return (
		<div className={classNames({
			'w-full max-w-2xl mx-auto px-10 2xl:px-0': true,
			'text-center': center
		})}>
			<span className="bg-blue-200 rounded-md text-indigo-800 font-semibold px-10 py-2 text-lg inline-block">
				{name}
			</span>
			<h1 className="my-6 font-bold text-4xl text-gray-900 drop-shadow-lg">
				{title}
			</h1>
			<p className="text-gray-500 font-medium leading-loose">{description}</p>
		</div>
	)
}

export default SectionHeader
