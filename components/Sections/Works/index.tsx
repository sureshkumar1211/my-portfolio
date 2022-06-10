import React from "react";
import Work from "../../FeaturedWorks/Work";
import { data } from "../../../constants/pages/works";

const Works: React.FC<any> = () => {
	const renderWorks = () => {
		return data.map((item, index) => <Work key={index} {...item} />);
	};
	return <div className="flex flex-col space-y-3">{renderWorks()}</div>;
};

export default Works;
