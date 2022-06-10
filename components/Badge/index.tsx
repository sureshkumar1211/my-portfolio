import React from "react";
import BlueBadge from "./Blue";
import GrayBadge from "./Gray";
import GreenBadge from "./Green";
import RedBadge from "./Red";

const badgeTypes: any = {
	blue: (text: string) => <BlueBadge text={text} />,
	green: (text: string) => <GreenBadge text={text} />,
	red: (text: string) => <RedBadge text={text} />,
	gray: (text: string) => <GrayBadge text={text} />,
};

interface BadgeType {
	type: string;
	text: string;
}

const Badge: React.FC<BadgeType> = ({ type, text }) => {
	return <>{badgeTypes[type](text)}</>;
};

export default Badge;
