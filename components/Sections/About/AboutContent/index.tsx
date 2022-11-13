import React from "react";

const AboutContent = () => {
	return (
		<div className="flex font-light flex-col space-y-3 text-gray-600">
			<p>
				Hey!, I’m <span className="text-primary-color font-semibold">Suresh</span>, a full-stack software engineer based
				in <span className="text-primary-color font-semibold">India</span>🇮🇳.
			</p>
			<p>
				I am creative and passionate about design and technology so I always try to craft great-looking software
				products 🎨
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
			<p>
				I consider myself a curious and inquisitive person, so in my spare time, I like to work on side projects, try to
				contribute to open-source software and aim to constantly learn something new to improve my skillset 🤓
			</p>
		</div>
	);
};

export default AboutContent;
