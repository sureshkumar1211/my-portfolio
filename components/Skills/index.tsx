import React from "react";
import {
	SiJavascript,
	SiTypescript,
	SiReact,
	SiRedux,
	SiExpress,
	SiHtml5,
	SiCss3,
	SiNestjs,
	SiDocker,
	SiKubernetes,
	SiGooglecloud,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import Skill from "./Skill";

const data = [
	{
		name: "Javascript",
		Icon: SiJavascript,
	},
	{
		name: "Typescript",
		Icon: SiTypescript,
	},
	{
		name: "React",
		Icon: SiReact,
	},
	{
		name: "Redux",
		Icon: SiRedux,
	},
	{
		name: "Node",
		Icon: FaNodeJs,
	},
	{
		name: "Next",
		Icon: TbBrandNextjs,
	},
	{
		name: "Nest Js",
		Icon: SiNestjs,
	},
	{
		name: "Express",
		Icon: SiExpress,
	},
	{
		name: "Html5",
		Icon: SiHtml5,
	},
	{
		name: "CSS",
		Icon: SiCss3,
	},
	{
		name: "Docker",
		Icon: SiDocker,
	},
	{
		name: "Kubernetes",
		Icon: SiKubernetes,
	},
	{
		name: "GCP",
		Icon: SiGooglecloud,
	},
];

const Skills = () => {
	const renderSkills = () => {
		return data.map((item, index) => <Skill key={index} {...item} />);
	};
	return (
		<div className="w-full bg-primary-color-200">
			<div className="container">
				<div className="flex flex-col space-y-3 bg-primary-color-200 py-10">
					<h4 className="text-base text-center md:text-left mb-4">Technologies and Tools</h4>
					<div className="grid grid-cols-2 md:grid-cols-6 gap-4">{renderSkills()}</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
