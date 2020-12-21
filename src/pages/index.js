import React from "react";
import theme from "theme";
import { Theme, Link, Box, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Menu, Section, StackItem, Stack, SocialMedia } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Chen Lev
			</title>
			<meta name={"description"} content={"Chen Lev is an Artist, an Illustrator and a Teacher."} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/5fafc74e8996cc001edcdda2/images/favicon.png?v=2020-11-17T06:27:42.307Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/5fafc74e8996cc001edcdda2/images/favicon.png?v=2020-11-17T06:27:42.307Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/5fafc74e8996cc001edcdda2/images/favicon.png?v=2020-11-17T06:27:42.307Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/5fafc74e8996cc001edcdda2/images/favicon.png?v=2020-11-17T06:27:42.307Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/5fafc74e8996cc001edcdda2/images/favicon.png?v=2020-11-17T06:27:42.307Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/5fafc74e8996cc001edcdda2/images/favicon.png?v=2020-11-17T06:27:42.307Z"} />
		</Helmet>
		<Section
			position="sticky"
			top={0}
			z-index="9"
			background="#ffffff"
			box-shadow="0 8px 32px 0 rgba(0, 0, 0, 0.3)"
		>
			<Override slot="SectionContent" />
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				flex-direction="row-reverse"
				md-flex-direction="column"
			>
				<Menu
					display="flex"
					justify-content="center"
					font="--base"
					font-weight="700"
					md-flex-direction="row"
					md-align-items="center"
				>
					<Override
						slot="link"
						text-decoration="none"
						color="#001526"
						padding="6px 12px"
						font="500 18px/27px Inter, sans-serif"
						sm-font="500 16px/27px Inter, sans-serif"
						hover-color="#004b8c"
					/>
					<Override slot="link-active" color="--primary" />
					<Override slot="item" padding="6px" sm-padding="6px 0 6px 0" />
					<Override slot="link-index">
						Home
					</Override>
				</Menu>
			</Box>
		</Section>
		<Section background="#001526" padding="64px 0" sm-padding="0 0 40px 0">
			<Override slot="SectionContent" max-width="1100px" sm-margin="0px 28.7969px 0px 0" />
			<Stack sm-width="100vw" sm-margin="-16px 0 -16px 0">
				<StackItem width="50%" sm-width="100vw" sm-padding="0 0 16px 0" lg-width="100%">
					<Override
						slot="StackItemContent"
						margin-right="-20%"
						padding-bottom="120%"
						background="url(https://uploads.quarkly.io/5fafc74e8996cc001edcdda2/images/chen.jpg?v=2020-11-14T12:03:49.213Z) 0% 15%/cover"
						lg-margin-right="0"
						lg-padding-bottom="80%"
						lg-background="url(https://uploads.quarkly.io/5fafc74e8996cc001edcdda2/images/chen.jpg?v=2020-11-14T12:03:49.213Z) 50% 50%/cover"
						border-radius="4px"
						sm-width="100%"
						sm-margin="0px 0px 0px 0"
						sm-background="url(https://uploads.quarkly.io/5fafc74e8996cc001edcdda2/images/chen.jpg?v=2020-11-14T12:03:49.213Z) 50% 100%/cover no-repeat"
						sm-border-radius={0}
					/>
				</StackItem>
				<StackItem width="50%" lg-width="100%" sm-margin="-19vw 0px 0px 0px">
					<Override
						slot="StackItemContent"
						padding="98px 64px"
						margin-left="-20%"
						margin-top="36px"
						background="#9e262b"
						color="--light"
						mix-blend-mode="normal"
						lg-margin-left="0"
						lg-margin-top="0"
						flex-direction="column"
						opacity=".9"
						border-radius="4px"
						sm-padding="16px 0 16px 0"
						sm-opacity=".95"
					/>
					<Text
						as="h1"
						margin="0 0 16px 0"
						font="--headline1"
						lg-font="--headline2"
						color="#ffffff"
						sm-width="84vw"
						sm-margin="0 0 16px 3vw"
					>
						Chen Lev
					</Text>
					<Text
						as="p"
						margin="16px 0"
						font="--base"
						color="#ffffff"
						sm-width="84vw"
						sm-margin="16px 0 16px 3vw"
					>
						Chen Lev is an Artist, an Illustrator and a Teacher.
						<br />
						She participated in museum and gallery exhibitions and published her own illustrated children's book.{" "}
						<br />
						<br />
						Chen graduated with honors from Bezalel Academy of Art and Design (BFA in Art) and spent a semester in a Student Exchange program at Parsons in New York. Chen got her Teaching Certificate from Seminar Hakiboutzim.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Box
			position="relative"
			display="grid"
			grid-template-columns="1fr 1fr 1fr 1fr"
			justify-items="center"
			background="#ffffff"
			sm-grid-template-columns="1fr 1fr"
			sm-grid-template-rows="43vw"
			justify-content="space-evenly"
			max-width="1000px"
			padding="120px calc(50% - 500px) 80px calc(50% - 500px)"
			md-max-width="100vw"
			md-width="100vw"
			md-grid-gap={0}
			lg-grid-gap={0}
			width="100vw"
		>
			<Text
				font="--headline2"
				position="absolute"
				color="#9e262b"
				left="calc(50% - 475px)"
				md-left="24px"
				lg-left="24px"
			>
				Cutouts
			</Text>
			<Box
				width="20vw"
				height="20vw"
				background="rgba(0, 0, 0, 0) url(https://levchen.com/prevs/sub_02/LevChen_03.jpg) 0% 0% /cover no-repeat scroll padding-box"
				box-shadow="0 16px 32px 0 rgba(0, 0, 0, 0.2)"
				sm-width="40vw"
				sm-height="40vw"
				max-width="200px"
				max-height="200px"
				border-radius="4px"
			/>
			<Box
				width="20vw"
				height="20vw"
				background="rgba(0, 0, 0, 0) url(https://levchen.com/prevs/sub_02/LevChen_01.jpg) 0% 0% /cover no-repeat scroll padding-box"
				box-shadow="0 16px 32px 0 rgba(0, 0, 0, 0.2)"
				sm-width="40vw"
				sm-height="40vw"
				max-width="200px"
				max-height="200px"
				border-radius="4px"
			/>
			<Box
				width="20vw"
				height="20vw"
				background="rgba(0, 0, 0, 0) url(https://levchen.com/prevs/sub_02/LevChen_04.jpg) 0% 0% /cover no-repeat scroll padding-box"
				box-shadow="0 16px 32px 0 rgba(0, 0, 0, 0.2)"
				sm-width="40vw"
				sm-height="40vw"
				max-width="200px"
				max-height="200px"
				sm-display="none"
				border-radius="4px"
			/>
			<Box
				width="20vw"
				height="20vw"
				background="rgba(0, 0, 0, 0) url(https://levchen.com/prevs/sub_02/LevChen_06.jpg) 0% 0% /cover no-repeat scroll padding-box"
				box-shadow="0 16px 32px 0 rgba(0, 0, 0, 0.2)"
				sm-width="40vw"
				sm-height="40vw"
				max-width="200px"
				max-height="200px"
				sm-display="none"
				border-radius="4px"
			/>
			<Link
				href="404"
				font="--base"
				display="block"
				position="absolute"
				bottom="32px"
				right="calc(50% - 475px)"
				color="#0c74c6"
				text-decoration-line="initial"
				text-transform="uppercase"
				md-right="24px"
				lg-right="24px"
				sm-bottom="52px"
				hover-color="#2a9af4"
			>
				See all{" "}
			</Link>
		</Box>
		<Box
			position="relative"
			padding="120px calc(50% - 500px) 80px calc(50% - 500px)"
			display="grid"
			grid-template-columns="1fr 1fr 1fr 1fr"
			background="#e0e0e0"
			sm-grid-template-columns="1fr 1fr"
			sm-grid-template-rows="43vw"
			justify-items="center"
			max-width="1000px"
			md-max-width="100vw"
			md-width="100vw"
			md-grid-gap={0}
			lg-grid-gap={0}
			width="100vw"
		>
			<Text
				font="--headline2"
				position="absolute"
				left="calc(50% - 475px)"
				color="#9e262b"
				md-left="24px"
				lg-left="24px"
			>
				Animations
			</Text>
			<Box
				width="20vw"
				height="20vw"
				background="rgba(0, 0, 0, 0) url(https://levchen.com/prevs/sub_00/LevChen_17.jpg) 0% 0% /cover no-repeat scroll padding-box"
				box-shadow="0 16px 32px 0 rgba(0, 0, 0, 0.2)"
				sm-width="40vw"
				sm-height="40vw"
				max-width="200px"
				max-height="200px"
				border-radius="4px"
			/>
			<Box
				width="20vw"
				height="20vw"
				background="rgba(0, 0, 0, 0) url(https://levchen.com/prevs/sub_00/LevChen_12.jpg) 0% 0% /cover no-repeat scroll padding-box"
				box-shadow="0 16px 32px 0 rgba(0, 0, 0, 0.2)"
				sm-width="40vw"
				sm-height="40vw"
				max-width="200px"
				max-height="200px"
				border-radius="4px"
			/>
			<Box
				width="20vw"
				height="20vw"
				background="rgba(0, 0, 0, 0) url(https://levchen.com/prevs/sub_00/LevChen_15.jpg) 0% 0% /cover no-repeat scroll padding-box"
				box-shadow="0 16px 32px 0 rgba(0, 0, 0, 0.2)"
				sm-width="40vw"
				sm-height="40vw"
				max-width="200px"
				max-height="200px"
				sm-display="none"
				border-radius="4px"
			/>
			<Box
				width="20vw"
				height="20vw"
				background="rgba(0, 0, 0, 0) url(https://levchen.com/prevs/sub_00/LevChen_09.jpg) 0% 0% /cover no-repeat scroll padding-box"
				box-shadow="0 16px 32px 0 rgba(0, 0, 0, 0.2)"
				sm-width="40vw"
				sm-height="40vw"
				max-width="200px"
				max-height="200px"
				sm-display="none"
				border-radius="4px"
			/>
			<Link
				href="animations"
				font="--base"
				display="block"
				position="absolute"
				bottom="32px"
				right="calc(50% - 475px)"
				color="#0c74c6"
				text-decoration-line="initial"
				text-transform="uppercase"
				md-right="24px"
				lg-right="24px"
				sm-bottom="52px"
				hover-color="#2a9af4"
			>
				See all{" "}
			</Link>
		</Box>
		<Box
			position="relative"
			padding="120px calc(50% - 500px) 80px calc(50% - 500px)"
			display="grid"
			grid-template-columns="1fr 1fr 1fr 1fr"
			justify-items="center"
			background="#cdcdcd"
			sm-grid-template-columns="1fr 1fr"
			sm-grid-template-rows="43vw"
			max-width="1000px"
			md-max-width="100vw"
			md-width="100vw"
			md-grid-gap={0}
			lg-grid-gap={0}
			width="100vw"
		>
			<Text
				font="--headline2"
				position="absolute"
				left="calc(50% - 475px)"
				color="#9e262b"
				md-left="24px"
				lg-left="24px"
			>
				Projects
			</Text>
			<Box
				width="20vw"
				height="20vw"
				background="rgba(0, 0, 0, 0) url(https://levchen.com/prevs/sub_02/LevChen_22.jpg) 0% 0% /cover no-repeat scroll padding-box"
				box-shadow="0 16px 32px 0 rgba(0, 0, 0, 0.2)"
				sm-width="40vw"
				sm-height="40vw"
				max-width="200px"
				max-height="200px"
				border-radius="4px"
			/>
			<Box
				width="20vw"
				height="20vw"
				background="rgba(0, 0, 0, 0) url(https://levchen.com/prevs/sub_02/LevChen_26.jpg) 0% 0% /cover no-repeat scroll padding-box"
				box-shadow="0 16px 32px 0 rgba(0, 0, 0, 0.2)"
				sm-width="40vw"
				sm-height="40vw"
				max-height="200px"
				max-width="200px"
				border-radius="4px"
			/>
			<Box
				width="20vw"
				height="20vw"
				background="rgba(0, 0, 0, 0) url(https://levchen.com/prevs/sub_00/LevChen_11.jpg) 0% 0% /cover no-repeat scroll padding-box"
				box-shadow="0 16px 32px 0 rgba(0, 0, 0, 0.2)"
				sm-width="40vw"
				sm-height="40vw"
				max-height="200px"
				max-width="200px"
				sm-display="none"
				border-radius="4px"
			/>
			<Box
				width="20vw"
				height="20vw"
				background="rgba(0, 0, 0, 0) url(https://levchen.com/prevs/sub_04/LevChen_08.jpg) 0% 0% /cover no-repeat scroll padding-box"
				box-shadow="0 16px 32px 0 rgba(0, 0, 0, 0.2)"
				sm-width="40vw"
				sm-height="40vw"
				max-height="200px"
				max-width="200px"
				sm-display="none"
				border-radius="4px"
			/>
			<Link
				href="projects"
				font="--base"
				display="block"
				position="absolute"
				bottom="32px"
				right="calc(50% - 475px)"
				color="#0c74c6"
				text-decoration-line="initial"
				text-transform="uppercase"
				md-right="24px"
				lg-right="24px"
				sm-bottom="52px"
				hover-color="#2a9af4"
			>
				See all{" "}
			</Link>
		</Box>
		<Section background="#001526" padding="60px 0" sm-padding="40px 0">
			<SocialMedia facebook="https://www.facebook.com/chen.lev.98/" youtube="https://www.youtube.com/channel/UCZHmn1yqvMUjhhQIeH84iAA" icon-size="36px" instagram="https://www.instagram.com/chen_lev_on_paper/">
				<Override
					slot="link"
					border-radius="50%"
					color="--grey"
					hover-color="--light"
					background="transparent"
					hover-background="transparent"
					margin="0 8px"
				/>
			</SocialMedia>
		</Section>
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