import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AboutContent from "../../components/Sections/About/AboutContent";

const About: NextPage = () => {
	return (
		<>
			<Head>
				<title>Believe Programmer</title>
				<meta name="description" content="Believe Programmer - About" />
			</Head>
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
		</>
	);
};

export default About;
