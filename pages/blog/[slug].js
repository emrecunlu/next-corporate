import React from 'react'
import { useRouter } from 'next/router'
import MainLayout from '../../components/Layouts/MainLayout'
import BlogLayout from '../../components/Layouts/BlogLayout'
import Image from 'next/image'

function BlogDetail() {
const router = useRouter()

	const blog = {
		image:
			'https://wp.dreamitsolution.net/zomia-multipurpose/software/wp-content/uploads/2022/06/blog3-730x550.jpg',
		title: 'Made Neat An On Be Gave Show Snug Tore.',
		createdAt: '23 May,  2022',
		content: '<h1>Merhaba</h1>',
	}

	return (
		<div className="border overflow-hidden border-gray-300 rounded-md shadow-lg shadow-indigo-100 w-full">
			<div className="relative group">
				<Image
					className="rounded-t-md w-full"
					src={blog.image}
					width={730}
					height={550}
				/>
				<div className="w-full h-full top-0 left-0 absolute z-10 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-all bg-opacity-40 duration-700"></div>
			</div>
			<div className=" bg-white p-8 flex flex-col gap-y-8">
				<div className="flex items-center gap-x-6">
					<span className=" text-gray-500">Software</span>
					<div className="flex items-center gap-x-2">
						<span className="w-2 h-2 rounded-full bg-indigo-100 block"></span>
						<span className="font-semibold text-gray-500 text-sm">
							{blog.createdAt}
						</span>
					</div>
				</div>
				<article className="prose">{blog.content}</article>
			</div>
		</div>
	)
}

export default BlogDetail

BlogDetail.getLayout = function PageLayout(page) {
	return (
		<MainLayout>
			<BlogLayout title="Blog Detail">{page}</BlogLayout>
		</MainLayout>
	)
}
