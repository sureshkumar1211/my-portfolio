import type { NextPage } from "next";
import Head from "next/head";
import ContactSection from "../../components/Sections/Contact";

const Contact: NextPage = () => {
	return (
		<>
			<Head>
				<title>Believe Programmer</title>
				<meta name="description" content="Believe Programmer - Contact" />
			</Head>
			<div className="container flex flex-col py-5">
				<h2 className="text-2xl mb-4 font-semibold">Contact</h2>
				<ContactSection />
			</div>
		</>
	);
};

export default Contact;
