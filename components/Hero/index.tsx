import React from "react";
import Content from "./Content";
import HeroImage from "./Image";

const Hero = () => {
	return (
		<div className="container py-6">
			<div className="flex flex-col justify-center md:flex-row my-10 items-center md:justify-between">
				<Content />
				<HeroImage />
			</div>
		</div>
	);
};

export default Hero;
