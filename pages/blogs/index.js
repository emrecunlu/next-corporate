import React from 'react'
import BlogCard from '../../components/Blog/BlogCard'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import Navbar from '../../components/Navbar/Navbar'
import { blogs } from '../../components/Blog/blogList'
import BlogLatest from '../../components/Blog/BlogLatest'
import BlogSearch from '../../components/Blog/BlogSearch'
import Link from 'next/link'
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs'
import BlogLayout from '../../components/Layouts/BlogLayout'
import MainLayout from '../../components/Layouts/MainLayout'

function Blogs() {
	return (
		<div className="flex flex-col gap-y-12">
			{blogs.map((blog) => (
				<BlogCard key={blog.id} blog={blog} />
			))}
			<div className="w-full flex items-center justify-between">
				<Link
					href="/"
					className="bg-indigo-700 text-white font-semibold rounded-md shadow-lg px-8 py-3 hover:bg-indigo-400 transition-all flex items-center gap-x-2"
				>
					<BsChevronDoubleLeft size={14} />
					<span>Geri</span>
				</Link>
				<Link
					href="/"
					className="bg-indigo-700 text-white font-semibold rounded-md shadow-lg px-8 py-3 hover:bg-indigo-400 transition-all flex items-center gap-x-2"
				>
					<span>İleri</span>
					<BsChevronDoubleRight size={14} />
				</Link>
			</div>
		</div>
	)
}

export default Blogs

Blogs.getLayout = function PageLayout(page) {
	return (
		<MainLayout title="Blog List">
			<BlogLayout>{page}</BlogLayout>
		</MainLayout>
	)
}
