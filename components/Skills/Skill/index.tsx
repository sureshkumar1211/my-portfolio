import React from "react";
import { IconType } from "react-icons";

interface SkillType {
	name: string;
	Icon: IconType;
}

const Skill: React.FC<SkillType> = ({ Icon, name }) => {
	return (
		<div className="flex space-x-3 rounded-md items-center p-3 bg-white shadow-md">
			<Icon className="h-4 w-4" />
			<h4 className="text-sm">{name}</h4>
		</div>
	);
};

export default Skill;
