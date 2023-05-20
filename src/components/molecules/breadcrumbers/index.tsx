import { Box } from "@/components/atoms/box";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export type BreadcrumbersProps = {
	crumbsArr: CrumberType[];
	textSize?: string;
};

type CrumberType = {
	text: string;
	url?: string;
};

export const Breadcrumbers: React.FC<BreadcrumbersProps> = ({
	crumbsArr,
	textSize,
}) => {
	const navigate = useNavigate();

	if (crumbsArr.length === 0) {
		return null;
	}

	const breadcrumbItems = crumbsArr.map((item, i) => (
		<React.Fragment key={i}>
			<Box
				style={{
					cursor: item.url ? "pointer" : "unset",
					fontSize: textSize ? textSize + "px" : "",
				}}
				onClick={() => {
					if (item.url) {
						navigate(item.url);
					}
				}}
			>
				{item.text}
			</Box>
			{i < crumbsArr.length - 1 && (
				<Box
					display="flex"
					alignSelf="center"
					style={{ fill: "#fa1" }}
				>
					<MdOutlineKeyboardArrowRight size={textSize} />
				</Box>
			)}
		</React.Fragment>
	));

	return (
		<Box
			gap="8px"
			display="flex"
			flexDirection="row"
			justify="center"
			width="fit-content"
		>
			{breadcrumbItems}
		</Box>
	);

	// <Breadcrumbers
	// 				crumbsArr={[{ text: "sla", url: "/profi" }, { text: "sla" }]}
	// 			></Breadcrumbers>;
};
