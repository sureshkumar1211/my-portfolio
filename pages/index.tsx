import type { NextPage } from "next";
import Head from "next/head";
import FeaturedWorks from "../components/FeaturedWorks";
import Hero from "../components/Hero";
import Skills from "../components/Skills";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Believe Programmer</title>
				<meta name="description" content="Believe Programmer - Portfolio" />
			</Head>
			<div>
				{/* hero */}
				<Hero />
				{/* skills */}
				<Skills />
				{/* featured works */}
				<FeaturedWorks />
			</div>
		</>
	);
};

export default Home;
