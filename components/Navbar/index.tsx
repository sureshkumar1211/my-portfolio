import React from "react";
import MobileMenu from "../MobileMenu";
import NavItem from "./NavItem";

const navLinks = [
	{
		name: "Works",
		redirect: "/works",
	},
	{
		name: "About",
		redirect: "/about",
	},
	{
		name: "Contact",
		redirect: "/contact",
	},
];

const Navbar: React.FC<any> = ({ showMenu, setShowMenu }) => {
	const renderNav = () => {
		return navLinks.map((item, index) => <NavItem key={index} {...item} />);
	};
	return (
		<>
			<div className="hidden md:flex ml-auto space-x-3 text-base">{renderNav()}</div>

			<MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />
		</>
	);
};

export default Navbar;
