import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import Navbar from '../Navbar/Navbar'

function MainLayout({ children, title }) {
	return (
		<div>
			<Navbar />
            <main>
				{title && <Breadcrumb title={title} />}
                {children}
            </main>
		</div>
	)
}

export default MainLayout
