import React from "react";
import Hero from "./Hero/hero";
import TitleSection from "./titleSection/titleSection";
import AboutOrgIdentitySection from "./aboutOrgIdentitySection/aboutOrgIdentitySection";
import CompanyProgress from "./companyProgressSection/companyProgress";
import TestimonialSection from "./testimonialSection/testimonialSection";
import Footer from "../../../components/footer/footer";
import "./donate.scss";

/**
 * Renders Donate Landing page
 * @returns {JSX.Element}
 * @constructor
 */
export default function Donate() {
	return (
		<>
			<Hero />
			{/* Code for Donate Landing page goes here */}
			<TitleSection />
			<AboutOrgIdentitySection />
			<CompanyProgress />
			<TestimonialSection />
			<Footer />
		</>
	);
}
