import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ProductItem({ product }) {
	return (
		<article>
			<div className="rounded-md overflow-hidden relative group">
				<Image
					src={product.image}
					width={370}
					height={370}
					alt={product.title}
				/>
				<Link href={product.slug}>
					<div className="w-full h-full absolute top-0 left-0 p-6">
						<div className="bg-indigo-600 bg-opacity-80 rounded-md h-full w-full shadow-md shadow-indigo-600 scale-x-0 group-hover:scale-x-100 transition-all duration-500">
							<div className="flex gap-y-2 items-center justify-end flex-col h-full -translate-y-0 group-hover:-translate-y-10 group-hover:opacity-100 transition-all opacity-0 duration-700">
								<h1 className="text-white font-semibold text-2xl drop-shadow-xl">
									{product.title}
								</h1>
								<span className="text-white font-medium text-opacity-90">
									{product.category}
								</span>
							</div>
						</div>
					</div>
				</Link>
			</div>
		</article>
	)
}

export default ProductItem
