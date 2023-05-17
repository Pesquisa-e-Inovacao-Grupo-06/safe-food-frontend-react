import React, { PropsWithChildren, useEffect, useState } from "react";
import { Box } from "@/components/atoms/box";

import { useSafeFoodTheme } from "@/app/contexts/SafeFoodThemeProvider";
import {
	MdOutlineKeyboardArrowLeft,
	MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import * as S from "./styles";

export const Pagination: React.FC<{
	totalPages: number;
}> = ({ totalPages }) => {
	const { colors } = useSafeFoodTheme().getTheme();
	let qtyPages: string | number[] = [];
	for (let i = 1; i <= totalPages; i++) {
		qtyPages.push(i);
	}
	let DOTS = "...";
	const [currentPage, setCurrentPage] = useState<string | number>(1);
	const [pages, setPages] = useState(["<", ...qtyPages, ">"]);

	const changePage = (val: string | number, index: number) => {
		if (index == 0)
			setCurrentPage(prev => (prev == 1 ? prev : (prev as number) - 1));
		else if (val == pages[pages.length - 1])
			setCurrentPage(prev =>
				prev == qtyPages.length ? prev : (prev as number) + 1
			);
		else if (index == pages.length - 3 && val == DOTS)
			setCurrentPage(prev => (prev as number) + 2);
		else if (index == 2 && val == DOTS)
			setCurrentPage(prev => (prev as number) - 2);
		else setCurrentPage(val);
	};

	useEffect(() => {
		if (qtyPages.length - 1 > 4) {
			if (typeof currentPage === "number" && currentPage >= 1 && currentPage < 4) {
				let slice = qtyPages.slice(0, 4);
				setPages(["<", ...slice, DOTS, pages[pages.length - 2], ">"]);
			} else if (
				typeof currentPage === "number" &&
				currentPage >= 4 &&
				currentPage < qtyPages.length - 2
			) {
				let slice = qtyPages.slice(currentPage - 2, currentPage + 1);
				setPages(["<", 1, DOTS, ...slice, DOTS, pages[pages.length - 2], ">"]);
			} else if (
				typeof currentPage === "number" &&
				currentPage >= qtyPages.length - 2 &&
				currentPage <= qtyPages.length
			) {
				let slice = qtyPages.slice(qtyPages.length - 4, qtyPages.length);
				setPages(["<", 1, DOTS, ...slice, ">"]);
			}
		}
	}, [currentPage]);

	const PrevArrowButton = () => (
		<MdOutlineKeyboardArrowLeft
			size={32}
			style={{
				cursor: currentPage == 1 ? "not-allowed" : "pointer",
				fill: currentPage != 1 ? colors.primary[600] : colors.primary[400],
			}}
		/>
	);
	const NextArrowButton = () => (
		<MdOutlineKeyboardArrowRight
			size={32}
			style={{
				cursor: currentPage == totalPages ? "not-allowed" : "pointer",
				fill: currentPage != totalPages ? colors.primary[600] : colors.primary[400],
			}}
		/>
	);
	const renderPageItem = (val: string | number, index: number) => {
		const Item = ({ children }: PropsWithChildren) => (
			<S.PageItem
				onClick={() => changePage(val, index)}
				currentPage={currentPage}
				totalPages={totalPages}
			>
				{children}
			</S.PageItem>
		);
		if (index == 0) {
			return (
				<Item key={val + "-" + index}>
					<PrevArrowButton />
				</Item>
			);
		} else if (index == pages.length - 1) {
			return (
				<Item key={val + "-" + index}>
					<NextArrowButton />
				</Item>
			);
		} else {
			const PageNumber =
				currentPage == val ? S.PaginationItemActive : S.PaginationItemDisable;
			return (
				<Item key={val + "-" + index}>
					<PageNumber>{val}</PageNumber>
				</Item>
			);
		}
	};
	return (
		<Box
			display="flex"
			flexDirection="row"
			width="min-content"
			justify="center"
		>
			{pages.map(renderPageItem)}
		</Box>
	);
};
