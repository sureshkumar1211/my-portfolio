import Copyright from "./Copyrights";
import SocialLinks from "./SocialLinks";

const Footer = () => {
	return (
		<div className="mt-auto container">
			<div className="flex justify-center items-center flex-col space-y-5 py-5">
				<SocialLinks />
				<Copyright />
			</div>
		</div>
	);
};

export default Footer;
