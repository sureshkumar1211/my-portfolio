import React from "react";

const contactDetails = {
	headerContent: [
		"I'm always open for a conversation, so please don't hesitate contacting me!",
		"Anyways, <a class='text-blue-500' href='https://nohello.club' target='_blank'rel='noreferrer'>please don't just say hello.</a>",
	],
	bodyContent: {
		header: "There's a few ways you can get it touch:",
		socialLinks: [
			{ name: "Email", link: "mailto:believeprogrammer@gmail.com?subject=Hi Suresh!" },
			{ name: "LinkedIn", link: "https://www.linkedin.com/in/sureshkumar-karuppusamy-224052103" },
			{ name: "GitHub", link: "https://github.com/sureshkumar1211" },
		],
	},
};

const ContactInformation = () => {
	const renderContents = () => {
		let jsxElements = [];

		const headerElements = contactDetails.headerContent.map((text, index) => {
			return <p key={index} dangerouslySetInnerHTML={{ __html: text }} />;
		});
		const bodyHeaderElement = <p>{contactDetails.bodyContent.header}</p>;

		const bodySocialElements = contactDetails.bodyContent.socialLinks.map((item, index) => {
			return (
				<li className="ml-8 font-semibold text-sm" key={index}>
					<a className="text-blue-500" href={item.link} target="_blank" rel="noreferrer">
						{item.name}
					</a>
				</li>
			);
		});
		const socialList = <ul className="list-disc flex flex-col space-y-2">{bodySocialElements}</ul>;
		jsxElements = [...headerElements, bodyHeaderElement, socialList];
		return jsxElements;
	};
	return <div className="flex flex-col space-y-3">{renderContents()}</div>;
};

export default ContactInformation;
