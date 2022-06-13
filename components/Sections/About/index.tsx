import React from "react";
import Image from "next/image";
import AboutContent from "./AboutContent";
const AboutSection = () => {
	return (
		<div className="container flex flex-col space-y-5 py-5">
			<h2 className="text-2xl mb-4 font-semibold">About Me</h2>
			<Image
				src={"/static/images/suresh.jpeg"}
				alt={"Profile Photo"}
				width={768}
				height={320}
				quality={100}
				objectFit={"cover"}
				objectPosition={"top"}
				layout={"intrinsic"}
			/>
			{/* aboutcontent */}
			<AboutContent />
			{/* Experiences */}
		</div>
	);
};

export default AboutSection;
