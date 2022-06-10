import React from "react";
import { IconType } from "react-icons";

interface SocialLinkItemTypes {
	link: string;
	Icon: IconType;
}

const SocialLinkItem: React.FC<SocialLinkItemTypes> = ({ link, Icon }) => {
	return (
		<a href={link} rel="noreferrer" target={"_blank"}>
			<Icon className="w-8 h-8 hover:text-primary-color-300 transition-all" />
		</a>
	);
};

export default SocialLinkItem;
