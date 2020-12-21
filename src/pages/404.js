import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Cutouts - Chen Lev
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5fafc74e8996cc001edcdda2/images/favicon.png?v=2020-11-17T06:27:42.307Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/5fafc74e8996cc001edcdda2/images/favicon.png?v=2020-11-17T06:27:42.307Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/5fafc74e8996cc001edcdda2/images/favicon.png?v=2020-11-17T06:27:42.307Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/5fafc74e8996cc001edcdda2/images/favicon.png?v=2020-11-17T06:27:42.307Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/5fafc74e8996cc001edcdda2/images/favicon.png?v=2020-11-17T06:27:42.307Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/5fafc74e8996cc001edcdda2/images/favicon.png?v=2020-11-17T06:27:42.307Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/5fafc74e8996cc001edcdda2/images/favicon.png?v=2020-11-17T06:27:42.307Z"} />
		</Helmet>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});