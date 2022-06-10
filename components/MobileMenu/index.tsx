import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const MobileMenu: React.FC<any> = ({ showMenu, setShowMenu }) => {
	return (
		<div className="md:hidden ml-auto">
			{!showMenu ? (
				<GiHamburgerMenu className="w-6 h-6" onClick={() => setShowMenu(true)} />
			) : (
				<MdClose className="w-6 h-6" onClick={() => setShowMenu(false)} />
			)}
		</div>
	);
};

export default MobileMenu;
