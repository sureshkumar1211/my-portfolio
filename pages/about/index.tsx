import type { NextPage } from "next";
import Head from "next/head";
import AboutSection from "../../components/Sections/About";

const About: NextPage = () => {
	return (
		<>
			<Head>
				<title>Believe Programmer</title>
				<meta name="description" content="Believe Programmer - About" />
			</Head>
			<AboutSection />
		</>
	);
};

export default About;
