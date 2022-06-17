import Link from "next/link";
import React from "react";

const contentObject = {
	title: "Hey 👋!, I'm <span class='text-secondary-color'>Suresh</span>, Software Engineer",
	description:
		"I'm a self-taught developer who lives in India 🇮🇳. I've worked with different technologies, both backend and frontend. I'm currently working at Konnectify as a Software Engineer. You can read more about me on my LinkedIn page.",
};

const Content = () => {
	return (
		<div className="flex mt-5 md:m-0 text-center md:text-left md:w-[50%] flex-col space-y-5">
			<h2 className="text-xl md:text-3xl" dangerouslySetInnerHTML={{ __html: contentObject.title }} />
			<p className="text-sm font-light leading-relaxed text-gray-600">{contentObject.description}</p>
			<div>
				<Link href="/static/Suresh/Resume.pdf" target={"_blank"}>
					<a className="mt-4 rounded-md hover:bg-primary-color text-sm px-4 py-2 bg-primary-color-700 text-white">
						Download Resume
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Content;
