import React from "react";
import Work from "./Work";
import { data } from "../../constants/pages/works";

const FeaturedWorks = () => {
	const renderWorks = () => {
		return data.map((item, index) => <Work key={index} {...item} />);
	};
	return (
		<div className="w-full bg-white py-10">
			<div className="container">
				<div className="flex flex-col space-y-3">
					<h4 className="text-base text-center md:text-left mb-4">Featured Works</h4>
					<div className="flex flex-col space-y-3">{renderWorks()}</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedWorks;
