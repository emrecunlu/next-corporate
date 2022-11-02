import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function BlogCard({ blog, contentMode }) {
	return (
		<article className="border overflow-hidden border-gray-300 rounded-md shadow-lg shadow-indigo-100 w-full">
			<Link href={blog.slug} className="relative group">
				<Image
					className="rounded-t-md w-full"
					src={blog.thumbnail}
					width={730}
					height={550}
				/>
				<div className="w-full h-full top-0 left-0 absolute z-10 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-all bg-opacity-40 duration-700"></div>
			</Link>
			<div className=" bg-white p-8 flex flex-col gap-y-5">
				<div className="flex items-center gap-x-6">
					<span className=" text-gray-500">Software</span>
					<div className="flex items-center gap-x-2">
						<span className="w-2 h-2 rounded-full bg-indigo-100 block"></span>
						<span className="font-semibold text-gray-500 text-sm">
							{blog.createdAt}
						</span>
					</div>
				</div>
				{!contentMode && (
					<Link href={blog.slug}>
						<h1 className="font-bold text-2xl text-gray-900 drop-shadow-xl hover:text-indigo-600 transition-all duration-700">
							{blog.title}
						</h1>
					</Link>
				)}
				{!contentMode && <p className="text-gray-500">{blog.description}</p>}
			</div>
		</article>
	)
}

export default BlogCard
