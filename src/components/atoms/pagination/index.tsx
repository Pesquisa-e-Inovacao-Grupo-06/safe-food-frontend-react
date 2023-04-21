import React, { useState } from "react";
import { Text } from "@/components/atoms/text";
import { Box } from "@/components/atoms/box";

import styled from "styled-components";
import { useSafeFoodTheme } from "@/app/contexts/SafeFoodThemeProvider";
import {
	MdOutlineKeyboardArrowLeft,
	MdOutlineKeyboardArrowRight,
} from "react-icons/md";

interface PaginationProps<T> {
	items: T[];
	itemsPerPage: number;
	renderItem: (item: T, index: number) => React.ReactNode;
}

function Pagination<T>({
	items,
	itemsPerPage,
	renderItem,
}: PaginationProps<T>) {
	const [currentPage, setCurrentPage] = useState(1);
	const [showComponents, setShowComponents] = useState(true);
	const [activePrevComponent, setActivePrevComponent] = useState(false);
	const [activeNextComponent, setActiveNextComponent] = useState(true);
	const [isListBegger, setisListBegger] = useState(false);
	const totalPages = Math.ceil(items.length / itemsPerPage);
	let numberVisible: number[] = [];

	const { colors } = useSafeFoodTheme().getTheme();
	function goToPage(page: number) {
		console.log(currentPage);

		if (currentPage == 3) {
			setisListBegger(true);
		}
		if (currentPage >= 3) {
			setisListBegger(true);
		}
		if (currentPage < 3) {
			setisListBegger(false);
		}
		if (page >= 0 && page != totalPages) {
			setCurrentPage(page);
		}
		if (page > 0) {
			setActivePrevComponent(true);
		} else {
			setActivePrevComponent(false);
		}
		if (page >= totalPages - 1) {
			setActiveNextComponent(false);
		} else {
			setActiveNextComponent(true);
		}
	}

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentItems = items.slice(startIndex, endIndex);
	const endIndexAt = (items.length - 1) / itemsPerPage;

	return (
		<Box>
			<Box style={{ minHeight: "300px" }}>
				{currentItems.map((item, index) => renderItem(item, startIndex + index))}
			</Box>
			<Box style={{ minHeight: "300px" }}></Box>
			<p>current page: {currentPage}</p>
			<p>activePrevComponent: {activePrevComponent}</p>
			<p>activeNextComponent: {activeNextComponent}</p>
			<Box
				id="sla"
				display="flex"
				flexDiretion="row"
				// maxWidth="300px"
				justify="unset"
			>
				<Box
					display="flex"
					flexDiretion="row"
				>
					<Box>
						<MdOutlineKeyboardArrowLeft
							size={32}
							onClick={() => goToPage(currentPage - 1)}
							style={{
								cursor: !activePrevComponent ? "not-allowed" : "pointer",
								pointerEvents: !activePrevComponent ? "none" : "all",
								fill: activePrevComponent ? colors.primary[600] : colors.primary[400],
							}}
						/>
					</Box>
					{isListBegger ? listMore() : listLess()}
				</Box>
				<Box>
					<MdOutlineKeyboardArrowRight
						size={32}
						style={{
							pointerEvents: !activeNextComponent ? "none" : "all",
							cursor: activeNextComponent ? "pointer" : "not-allowed",
							fill: activeNextComponent ? colors.primary[600] : colors.primary[400],
						}}
					/>
				</Box>
			</Box>
		</Box>
	);

	function listMore() {
		console.log("LISTMORE");

		numberVisible[0] = 1;
		numberVisible[1] = -1;
		numberVisible[2] = currentPage - 1;
		numberVisible[3] = currentPage;
		numberVisible[4] = currentPage + 1;
		numberVisible[5] = -1;
		numberVisible[6] = endIndex;

		console.log(numberVisible.join(", "));
		return Array.from({ length: numberVisible.length }, (_, i) =>
			numberVisible[i] !== -1 ? (
				<Box
					margin="20px"
					key={i}
				>
					<PaginationItemActive
						cursor
						style={{
							padding: "10px 16px 10px 16px",
							borderRadius: "8px",
							fontWeight: "bold",
						}}
						onClick={() => goToPage(numberVisible[i])}
						typeText="text-x-md"
					>
						{numberVisible[i]}
					</PaginationItemActive>
				</Box>
			) : (
				<Box
					margin="20px"
					key={i}
				>
					<PaginationItemDisable
						// cursor
						style={{
							padding: "10px 16px 10px 16px",
							borderRadius: "8px",
							fontWeight: "bold",
						}}
						onClick={() => goToPage(numberVisible[i - 1])}
						typeText="text-x-md"
					>
						{"..."}
					</PaginationItemDisable>
				</Box>
			)
		);
	}
	function listLess() {
		console.log("array");
		numberVisible[0] = 1;
		numberVisible[1] = 2;
		numberVisible[2] = 3;
		numberVisible[3] = 4;
		numberVisible[4] = endIndexAt;

		return Array.from({ length: numberVisible.length }, (_, i) =>
			numberVisible[i] !== -1 ? (
				<Box
					margin="20px"
					key={i}
				>
					<PaginationItemActive
						cursor
						style={{
							padding: "10px 16px 10px 16px",
							borderRadius: "8px",
							fontWeight: "bold",
						}}
						onClick={() => goToPage(numberVisible[i])}
						typeText="text-x-md"
					>
						{numberVisible[i]}
					</PaginationItemActive>
				</Box>
			) : (
				<Box
					margin="20px"
					key={i}
				>
					<PaginationItemDisable
						// cursor
						style={{
							padding: "10px 16px 10px 16px",
							borderRadius: "8px",
							fontWeight: "bold",
						}}
						// onClick={() => goToPage(numberVisible[i])}
						typeText="text-x-md"
					>
						{"..."}
					</PaginationItemDisable>
				</Box>
			)
		);
	}
}

export default Pagination;

const PaginationItemActive = styled(Text)`
	color: ${p => p.theme.colors.primary[600]};
`;

const PaginationItemDisable = styled(Text)`
	color: ${p => p.theme.colors.dark_gray[200]};
`;
