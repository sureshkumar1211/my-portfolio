import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const Layout: React.FC<any> = ({ children }) => {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
