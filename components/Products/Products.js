import React from 'react'
import SectionHeader from '../Section/SectionHeader'
import { products } from './data'
import ProductItem from './ProductItem'

function Products() {
	return (
		<section className="py-20 bg-indigo-50">
			<div className="container">
				<SectionHeader
					name="Portfolio"
					title="Our Impressive Portfolio"
					description="Web-enabled deliverables without enterprise strategic theme areas our land backward-compatible process improvements"
					center={true}
				/>
				<div className="grid grid-cols-3 mt-20 gap-8">
					{products.map(product => <ProductItem key={product.id} product={product} />)}
				</div>
			</div>
		</section>
	)
}

export default Products
