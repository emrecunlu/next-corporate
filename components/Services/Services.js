import React from 'react'
import ServiceCard from './ServiceCard'
import SectionHeader from '../Section/SectionHeader'
import { services } from './servicesList'

function Services() {
	return (
		<section className="py-20">
			<div className="container">
				<SectionHeader
					name="Our Services"
					title="More Awesome Services"
					description="Web-enabled deliverables without enterprise strategic theme areas our land backward-compatible process improvements"
                    center={true}
				/>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 overflow-hidden">
                    {services.map((service, key) => <ServiceCard number={key} key={service.id} service={service} />)}
                </section>
			</div>
		</section>
	)
}

export default Services
