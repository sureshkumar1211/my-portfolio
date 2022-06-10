import Link from "next/link";
import React from "react";
import { TbExternalLink } from "react-icons/tb";
import Badge from "../../Badge";
import GrayBadge from "../../Badge/Gray";

interface WorkType {
	title: string;
	link?: any;
	img: string;
	type: string;
	languages: string[];
	description: string;
}

const badgeTypes = ["blue", "green", "red"];

const Work: React.FC<WorkType> = ({ title, img, link, type, languages, description }) => {
	const getRandomBadgeType = () => {
		return badgeTypes[Math.round(Math.random() * (badgeTypes.length - 1))];
	};
	const renderTags = () => {
		return languages.map((item, index) => <Badge key={index} type={getRandomBadgeType()} text={item} />);
	};
	return (
		<article className="flex flex-col justify-start items-center !mt-4 md:flex-row md:justify-start md:items-start md:space-x-5 pb-5 border-b-2 border-gray-100">
			<div className="max-w-[250px] md:max-w-[200px]">
				<img src={img} alt={title} className="w-full h-full rounded-md" />
			</div>
			<div className="flex justify-start items-center flex-col md:items-start space-y-4 md:justify-start !mt-0">
				<div className="flex space-x-2 justify-center items-center md:justify-start !mt-4 md:mt-0">
					<a
						href={link}
						target="_blank"
						rel="noreferrer"
						className="text-xl hover:text-blue-500 flex items-center space-x-2 text-center md:text-left"
					>
						<span>{title}</span>
						<TbExternalLink />
					</a>
					<GrayBadge text={type} />
				</div>
				<p className="text-sm font-light text-center md:text-left text-gray-600">{description}</p>
				<div className="flex space-x-2">{renderTags()}</div>
			</div>
		</article>
	);
};

export default Work;
