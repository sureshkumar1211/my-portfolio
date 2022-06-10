import React from "react";

const RedBadge: React.FC<any> = ({ text }) => {
	return (
		<span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
			{text}
		</span>
	);
};

export default RedBadge;
