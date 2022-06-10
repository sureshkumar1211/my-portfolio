import Image from "next/image";
import React from "react";

const ContactImage = () => {
	return (
		<div className="hidden md:block">
			<Image
				src={"/static/images/Telecommuting-pana.png"}
				width={768}
				height={420}
				quality={100}
				objectFit={"cover"}
				objectPosition={"center"}
				layout={"intrinsic"}
			/>
		</div>
	);
};

export default ContactImage;
