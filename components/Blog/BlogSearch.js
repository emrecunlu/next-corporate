import React from 'react'
import { FcSearch } from 'react-icons/fc'

function BlogSearch() {
	return (
		<div className="bg-white flex flex-col gap-y-5 rounded-md shadow-md border border-gray-300 p-8">
			<form>
				<div className="w-full border border-gray-300 rounded-md overflow-hidden flex items-center justify-between">
					<input type="text" className="h-10 px-5 text-sm text-gray-900 flex-1 outline-none" placeholder="Search Here" />
					<button className="pr-5" type="submit">
						<FcSearch />
					</button>
				</div>
			</form>
		</div>
	)
}

export default BlogSearch
