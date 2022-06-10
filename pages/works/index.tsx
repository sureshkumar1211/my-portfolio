import type { NextPage } from "next";
import Head from "next/head";
import Works from "../../components/Sections/Works";

const WorksPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Believe Programmer</title>
				<meta name="description" content="Believe Programmer - Works" />
			</Head>
			<div className="container flex flex-col space-y-5 py-5">
				<h2 className="text-2xl mb-4 font-semibold text-center md:text-left">Works</h2>
				<Works />
			</div>
		</>
	);
};

export default WorksPage;
