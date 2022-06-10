import React from "react";
import ContactImage from "./ContactImage";
import ContactInformation from "./ContactInformation";

const ContactSection = () => {
	return (
		<div className="flex space-y-3 items-center">
			<ContactInformation />
			<ContactImage />
		</div>
	);
};

export default ContactSection;
