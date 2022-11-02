import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { blogs } from './blogList'

function BlogLatest() {
	return (
		<div className="bg-white flex flex-col gap-y-5 rounded-md shadow-md border border-gray-300 p-8">
			{blogs.map((blog) => (
				<article className="border-b border-gray-300 pb-8" key={blog.id}>
					<div className="flex gap-x-4">
						<Link href="/">
							<Image
								src={blog.thumbnail}
								width={80}
								height={80}
								className="rounded-md w-20 h-20"
							/>
						</Link>
						<div className="flex-1">
							<Link href="/">
								<h1 className="text-gray-900 font-medium drop-shadow-lg hover:text-indigo-600 transition-all">
									{blog.title}
								</h1>
							</Link>
							<p className="text-gray-500 font-semibold mt-1 text-sm">
								{blog.createdAt}
							</p>
						</div>
					</div>
				</article>
			))}
		</div>
	)
}

export default BlogLatest
