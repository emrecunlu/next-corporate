import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GoCalendar } from 'react-icons/go'

function BlogItem({ blog }) {
	return (
		<article className="rounded-md overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
			<Link href={blog.slug}>
				<div>
					<Image
						src={blog.thumbnail}
						width={390}
						height={390}
						alt={blog.title}
					/>
					<div className="p-8">
						<div className="flex items-center gap-x-2">
							<GoCalendar className="text-indigo-600" size={18} />
							<span className="font-semibold text-gray-600">
								{blog.createdAt}
							</span>
						</div>
						<h1 className="font-semibold text-gray-900 text-lg drop-shadow-xl py-4">
							{blog.title}
						</h1>
						<p className="text-gray-500">{blog.description}</p>
					</div>
				</div>
			</Link>
		</article>
	)
}

export default BlogItem
