import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from "swiper";

import 'swiper/css'

function Customers() {

    SwiperCore.use([Autoplay])

	return (
		<section className="bg-white py-14 shadow-2xl shadow-indigo-600">
			<div className="container">
				<Swiper
                    modules={[Autoplay]}
					spaceBetween={50}
					slidesPerView={4}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
                    loop={true}
                    loopedSlides={4}
                    grabCursor
                    centeredSlides
				>
					<SwiperSlide>
						<Image
							src="https://wp.dreamitsolution.net/zomia-multipurpose/software/wp-content/uploads/2022/06/brand02.png"
							width={173}
							height={46}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src="https://wp.dreamitsolution.net/zomia-multipurpose/software/wp-content/uploads/2022/06/brand02.png"
							width={173}
							height={46}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src="https://wp.dreamitsolution.net/zomia-multipurpose/software/wp-content/uploads/2022/06/brand02.png"
							width={173}
							height={46}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src="https://wp.dreamitsolution.net/zomia-multipurpose/software/wp-content/uploads/2022/06/brand02.png"
							width={173}
							height={46}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src="https://wp.dreamitsolution.net/zomia-multipurpose/software/wp-content/uploads/2022/06/brand02.png"
							width={173}
							height={46}
						/>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	)
}

export default Customers
