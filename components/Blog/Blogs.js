import React from 'react'
import SectionHeader from '../Section/SectionHeader'
import BlogItem from './BlogItem'
import { blogs } from './blogList'

function Blogs() {
	return (
		<section className="py-20">
			<div className="container">
				<SectionHeader
					name="Blog"
					title="Latest News & Blog"
					description="Web-enabled deliverables without enterprise strategic theme areas our land backward-compatible process improvements"
					center={true}
				/>
				<div className="mt-20 grid grid-cols-3 gap-8">
					{blogs.map((blog) => (
						<BlogItem key={blog.id} blog={blog} />
					))}
				</div>
			</div>
		</section>
	)
}

export default Blogs
