import React from "react";
import { FaGithubSquare, FaLinkedin, FaProductHunt } from "react-icons/fa";
import SocialLinkItem from "./SocialLinkItem";

const socialLinks = [
	{
		link: "https://github.com/sureshkumar1211",
		Icon: FaGithubSquare,
	},
	{
		link: "https://www.linkedin.com/in/sureshkumar-karuppusamy-224052103",
		Icon: FaLinkedin,
	},
	{
		link: "https://www.producthunt.com/@believe_programmer",
		Icon: FaProductHunt,
	},
];

const SocialLinks: React.FC = () => {
	const renderSocialIcons = () => {
		return socialLinks.map((item, index) => <SocialLinkItem key={index} {...item} />);
	};
	return <div className="flex space-x-4">{renderSocialIcons()}</div>;
};

export default SocialLinks;
