"use client"

import { motion } from "framer-motion"
import AboutUsSection from "./AboutUsSection"

const AboutUsContainer = () => {
	// ** States and variables
	const sectionVariants = {
		hidden: { opacity: 0, x: 20 },
		visible: { opacity: 1, x: 0, transition: { duration: 0.75 } },
	}

	return (
		<div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto py-20 space-y-10">
			{/* Introduction */}
			<motion.section
				initial="hidden"
				whileInView="visible"
				variants={sectionVariants}
				className="mb-12"
			>
				<AboutUsSection inverse image="/assets/about-us/graduation.svg">
					<p className="text-lg text-gray-600 leading-8">
						به سامانه هوشمند هوشیار خوش آمدید! اینجا محلی است که یادگیری
						با هوش مصنوعی ترکیب می‌شود تا تجربه‌ای بی‌نظیر و تعاملی برای
						دانش‌آموزان و معلمان ایجاد کند. ما با ارائه ابزارهای نوین
						آموزشی، به دنبال ساخت آینده‌ای روشن‌تر برای آموزش هستیم.
					</p>
				</AboutUsSection>
			</motion.section>

			{/* Mission */}
			<motion.section
				initial="hidden"
				whileInView="visible"
				variants={sectionVariants}
				className="mb-12 space-y-5"
			>
				<h2 className="text-2xl font-semibold text-gray-800">ماموریت ما</h2>

				<AboutUsSection image="/assets/about-us/mission.svg">
					<p className="text-gray-600 leading-8">
						ماموریت ما در{" "}
						<span className="text-blue-600 font-semibold">
							سامانه هوشمند هوشیار
						</span>{" "}
						این است که به دانش‌آموزان کمک کنیم تا استعدادها و توانایی‌های
						منحصر به فرد خود را کشف کنند. با استفاده از تکنولوژی‌های
						پیشرفته هوش مصنوعی، ما یادگیری شخصی‌سازی‌شده، قابل دسترس و با
						کیفیت بالا را برای همه فراهم می‌کنیم.
					</p>
				</AboutUsSection>
			</motion.section>

			{/* Vision */}
			<motion.section
				initial="hidden"
				whileInView="visible"
				variants={sectionVariants}
				className="mb-12 space-y-5"
			>
				<h2 className="text-2xl font-semibold text-gray-800">
					چشم‌انداز ما
				</h2>
				<AboutUsSection image="/assets/about-us/vision.svg" inverse>
					<p className="text-gray-600 leading-8">
						چشم‌انداز ما تبدیل شدن به برترین بستر آموزشی هوش مصنوعی در
						منطقه و جهان است. ما باور داریم که آینده آموزش به استفاده از
						فناوری‌های نوین و خلاقانه گره خورده است و تلاش می‌کنیم که در
						این مسیر پیشگام باشیم.
					</p>
				</AboutUsSection>
			</motion.section>

			{/* Why Hoshiyar */}
			<motion.section
				initial="hidden"
				whileInView="visible"
				variants={sectionVariants}
				className="mb-12 space-y-5"
			>
				<h2 className="text-2xl font-semibold text-gray-800">
					چرا سامانه هوشیار؟
				</h2>

				<AboutUsSection image="/assets/about-us/why.svg">
					<ul className="list-disc list-inside text-gray-600 leading-8">
						<li>
							تجربه شخصی‌سازی‌شده: هوش مصنوعی ما می‌تواند محتوا و
							برنامه‌های درسی را با نیازهای هر دانش‌آموز تطبیق دهد.
						</li>
						<li>
							بازخورد لحظه‌ای: دانش‌آموزان می‌توانند فوراً نتایج عملکرد
							خود را ببینند و پیشرفت کنند.
						</li>
						<li>
							دسترسی آسان: سامانه ما برای همه در هر زمان و هر مکان قابل
							استفاده است.
						</li>
					</ul>
				</AboutUsSection>
			</motion.section>

			{/* Values */}
			<motion.section
				initial="hidden"
				whileInView="visible"
				variants={sectionVariants}
				className="mb-12 space-y-5"
			>
				<h2 className="text-2xl font-semibold text-gray-800">
					ارزش‌های ما
				</h2>

				<AboutUsSection image="/assets/about-us/values.svg" inverse>
					<ul className="list-disc list-inside text-gray-600 leading-8">
						<li>
							نوآوری: به دنبال خلاقیت و استفاده از فناوری‌های پیشرفته.
						</li>
						<li>شفافیت: ارائه اطلاعات دقیق و کاربردی به کاربران.</li>
						<li>
							تعهد: تلاش برای ارائه بهترین خدمات به دانش‌آموزان، معلمان و
							والدین.
						</li>
					</ul>
				</AboutUsSection>
			</motion.section>

			{/* Features */}
			<motion.section
				initial="hidden"
				whileInView="visible"
				variants={sectionVariants}
				className="mb-12 space-y-5"
			>
				<h2 className="text-2xl font-semibold text-gray-800">
					ویژگی‌های سامانه هوشیار
				</h2>

				<AboutUsSection image="/assets/about-us/features.svg">
					<ul className="list-disc list-inside text-gray-600 leading-8">
						<li>
							آموزش تعاملی: ویدیوها، آزمون‌ها و تمرین‌های هوشمند که
							یادگیری را جذاب‌تر می‌کنند.
						</li>
						<li>
							ارزیابی پیشرفته: گزارش‌های عملکرد دقیق برای شناسایی نقاط
							قوت و ضعف.
						</li>
						<li>
							همکاری گروهی: ابزارهایی برای یادگیری مشترک و ایجاد تعامل
							میان دانش‌آموزان و معلمان.
						</li>
					</ul>
				</AboutUsSection>
			</motion.section>
		</div>
	)
}

export default AboutUsContainer
