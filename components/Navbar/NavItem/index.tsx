import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface NavItemTypes {
	name: string;
	redirect: string;
}

const NavItem: React.FC<NavItemTypes> = ({ name, redirect }) => {
	const { pathname } = useRouter();
	const activeClass = pathname.split("/")[1] === name.toLowerCase() ? " text-secondary-color font-semibold" : "";

	return (
		<Link href={redirect}>
			<a className={"hover:text-secondary-color transition-all" + activeClass}>{name}</a>
		</Link>
	);
};

export default NavItem;
