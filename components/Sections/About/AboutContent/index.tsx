import React from "react";

const AboutContent = () => {
	return (
		<div className="flex font-light flex-col space-y-3 text-gray-600">
			<p>
				Hey!, I’m <span className="text-primary-color font-semibold">Suresh</span>, a full-stack software engineer based
				in <span className="text-primary-color font-semibold">India</span>🇮🇳.
			</p>
			<p>
				I have been a web developer for 4 years. The technologies I work with are JavaScript, HTML and CSS with a focus
				on the frameworks React.js, Next.js, Node and Express. I use code not only to do my day-to-day job but also to
				solve everyday problems I come across.
			</p>
			<p>
				When not coding, I like to watch youtube videos and movies, play some games with friends or hang out with them
				🤝.{" "}
			</p>
		</div>
	);
};

export default AboutContent;
