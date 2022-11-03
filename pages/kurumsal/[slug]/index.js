import Image from 'next/image'
import React from 'react'
import Customers from '../../../components/Customers/Customers'
import MainLayout from '../../../components/Layouts/MainLayout'

function CorporateDetail() {
	return (
		<div>
			<section className="py-32">
				<div className="w-full px-20 max-w-7xl mx-auto flex items-center justify-between gap-x-20">
					<div className="flex-1">
						<h1 className="text-gray-900 font-bold drop-shadow-2xl text-5xl mb-8 leading-snug">
							We’re Very Experience In Startup Agency.
						</h1>
						<article className="prose prose-a:text-blue-500">
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. At,
								reiciendis quod optio repellat voluptas quaerat? Praesentium
								expedita itaque quis. Voluptatibus provident aliquam dolorum a
								dolore doloremque nam soluta necessitatibus harum.
							</p>
							<code>Merhaba bu bir kod.</code>
							<hr />
							<h6>Listeler</h6>
							<ul>
								<li>
									<a href="">fqefq</a>
								</li>
							</ul>
						</article>
					</div>
					<div className="animate-pulse">
						<Image
							src="https://wp.dreamitsolution.net/zomia-multipurpose/software/wp-content/uploads/2022/06/about1.png"
							width={500}
							height={500}
						/>
					</div>
				</div>
			</section>
			<Customers />
		</div>
	)
}

export default CorporateDetail

CorporateDetail.getLayout = function PageLayout(page) {
	console.log(page)

	return <MainLayout title="Corporate Detail">{page}</MainLayout>
}
