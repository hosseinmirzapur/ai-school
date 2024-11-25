"use client"

import { Button, Input, Textarea } from "@nextui-org/react"
import { motion } from "framer-motion"
import Image from "next/image"

const ContactUsContainer = () => {
	// Animation variants
	const sectionVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	}

	return (
		<div className="w-11/12 md:w-10/12 mx-auto py-14">
			{/* Header Section */}
			<motion.section
				initial="hidden"
				whileInView="visible"
				variants={sectionVariants}
				className="mb-12 flex flex-col-reverse lg:flex-row lg:justify-around gap-10 items-center"
			>
				<p className="text-lg text-gray-600 leading-8">
					ما مشتاق شنیدن نظرات، پیشنهادات و سوالات شما هستیم. نظرات شما
					برای ما بسیار ارزشمند است و می‌تواند به بهبود خدمات ما کمک کند.
					لطفاً از طریق فرم زیر یا اطلاعات تماس درج شده با ما در ارتباط
					باشید. ما در اسرع وقت به پیام‌های شما پاسخ خواهیم داد و از تعامل
					با شما خوشحال خواهیم شد.
				</p>
				<Image
					src="/assets/contact-us/support.svg"
					alt="support"
					width={400}
					height={400}
				/>
			</motion.section>

			{/* Contact Form Section */}
			<motion.section
				initial="hidden"
				whileInView="visible"
				variants={sectionVariants}
				className="mb-12"
			>
				<h2 className="text-2xl font-semibold text-gray-800 mb-4">
					فرم تماس
				</h2>
				<form className="flex flex-col gap-5 bg-gray-100 p-6 rounded-lg shadow-md">
					<Input
						type="text"
						isRequired
						size="lg"
						label="نام کامل"
						placeholder="نام خود را وارد کنید"
						variant="flat"
						color="primary"
					/>
					<Input
						type="email"
						isRequired
						size="lg"
						label="ایمیل"
						placeholder="ایمیل خود را وارد کنید"
						variant="flat"
						color="primary"
					/>

					<Textarea
						minRows={5}
						placeholder="پیام خود را بنویسید"
						isRequired
						label="متن پیام"
						variant="flat"
						color="primary"
					/>
					<Button color="primary" variant="shadow">
						ارسال پیام
					</Button>
				</form>
			</motion.section>

			{/* Contact Details Section */}
			<motion.section
				initial="hidden"
				whileInView="visible"
				variants={sectionVariants}
				className="mb-12"
			>
				<h2 className="text-2xl font-semibold text-gray-800 mb-4">
					اطلاعات تماس
				</h2>
				<ul className="list-none text-gray-600 leading-8">
					<li>
						<strong>تلفن:</strong> ۰۲۱-۱۲۳۴۵۶۷۸
					</li>
					<li>
						<strong>ایمیل:</strong>{" "}
						<a
							href="mailto:support@hoshiyar.ai"
							className="text-blue-600"
						>
							support@hoshiyar.ai
						</a>
					</li>
					<li>
						<strong>وب‌سایت:</strong>{" "}
						<a href="#" className="text-blue-600">
							hoshiyar.ai
						</a>
					</li>
				</ul>
			</motion.section>

			{/* Address Section */}
			<motion.section
				initial="hidden"
				whileInView="visible"
				variants={sectionVariants}
				className="mb-12"
			>
				<h2 className="text-2xl font-semibold text-gray-800 mb-4">
					آدرس ما
				</h2>
				<p className="text-gray-600 leading-8">
					تهران، خیابان ولیعصر، خیابان بهشتی، پلاک ۱۲۳، طبقه ۴، شرکت سامانه
					هوشمند هوشیار
				</p>
			</motion.section>

			{/* Map Section */}
			<motion.section
				initial="hidden"
				whileInView="visible"
				variants={sectionVariants}
				className="mb-12"
			>
				<h2 className="text-2xl font-semibold text-gray-800 mb-4">
					موقعیت مکانی
				</h2>
				<div className="rounded-lg overflow-hidden shadow-md">
					<iframe
						title="location-map"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d7e4f7e5%3A0x7a5e9c74abdb711e!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1618347983576!5m2!1sen!2s"
						width="100%"
						height="350"
						frameBorder="0"
						allowFullScreen={true}
						loading="lazy"
					></iframe>
				</div>
			</motion.section>
		</div>
	)
}

export default ContactUsContainer
