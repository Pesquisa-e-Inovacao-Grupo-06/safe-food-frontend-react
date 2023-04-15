import React, { useRef, useState, useEffect } from "react";
import { CarouselInner, CarouselItem, CarouselSection } from "./styles";
export type CarouselProps = {
	items: any[];
	itemSize: number;
	itemHeight: number;
	margin?: number;
};
export const Carousel: React.FC<CarouselProps> = ({
	items,
	itemSize,
	itemHeight,
	margin,
}) => {
	const carouselRef = useRef<HTMLDivElement>(null);
	const [carouselSize, setCarouselSize] = useState<number>(0);
	useEffect(() => {
		const scrollWidth = carouselRef.current?.scrollWidth;
		const offsetWidth = carouselRef.current?.offsetWidth;

		if (scrollWidth && offsetWidth) {
			setCarouselSize(scrollWidth - offsetWidth);
		}
	}, []);

	return (
		<CarouselSection
			ref={carouselRef}
			whileTap={{
				cursor: "grabbing",
			}}
			heigth={itemHeight}
		>
			<CarouselInner
				drag="x"
				dragConstraints={{
					right: 0,
					left: -carouselSize,
				}}
				dragTransition={{ bounceStiffness: 250, bounceDamping: 12 }}
			>
				{items.map((item, index) => {
					return (
						<CarouselItem
							marginHorizontal={margin}
							key={index + "item"}
							width={itemSize}
							height={itemHeight}
						>
							{item}
						</CarouselItem>
					);
				})}
			</CarouselInner>
		</CarouselSection>
	);
};
