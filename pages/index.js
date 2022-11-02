import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import About from '../components/About/About'
import Blogs from '../components/Blog/Blogs'
import Products from '../components/Products/Products'
import Customers from '../components/Customers/Customers'
import MainLayout from '../components/Layouts/MainLayout'


function Home() {
	return (
		<div>
			<Hero />
			<Services />
			<About />
			<Blogs />
			<Products />
			<Customers />
		</div>
	)
}

Home.getLayout = function PageLayout(page) {
	return (
		<MainLayout>
			{page}
		</MainLayout>
	)
}

export default Home
