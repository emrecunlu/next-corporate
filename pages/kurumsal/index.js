import React from 'react'
import MainLayout from '../../components/Layouts/MainLayout'
import SectionHeader from '../../components/Section/SectionHeader'
import ServiceCard from '../../components/Services/ServiceCard'

function CorporatePage() {
	return (
		<section className='container py-20'>
            <SectionHeader name="Kurumsal" title="Kurumsal Sayfalar" center />
        </section>
	)
}

export default CorporatePage

CorporatePage.getLayout = function PageLayout(page) { 
	return (
        <MainLayout title="Kurumsal">{page}</MainLayout>
    )
}
