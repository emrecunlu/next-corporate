import React from 'react'
import BlogSearch from '../Blog/BlogSearch'
import BlogLatest from '../Blog/BlogLatest'
import Breadcrumb from '../Breadcrumb/Breadcrumb'

function BlogLayout({ children, title }) {
	return (
		<div>
            <Breadcrumb title={title} />
			<div className="py-28 bg-indigo-50">
				<div className="container flex justify-between gap-x-12">
					<div className="w-8/12">
						{children}
					</div>
					<div className="w-4/12 flex flex-col gap-y-10">
						<BlogSearch />
						<BlogLatest />
					</div>
				</div>
			</div>
		</div>
	)
}

export default BlogLayout
