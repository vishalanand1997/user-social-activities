import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import news from '../../news.json';
import { Row, Col, Card, CardBody, CardImg, Carousel, CarouselIndicators, CarouselItem, CarouselCaption } from 'reactstrap';
import { BsFillPersonFill, BsCalendarEvent } from 'react-icons/bs';
import Nav from '../Nav/Nav';
export default function SpecificNews() {
	const parms = useParams();
	const [specificNews, setSpecificNews] = useState([]);
	// State for Active index
	const [activeIndex, setActiveIndex] = useState(0);

	// State for Animation
	const [animating, setAnimating] = useState(false);

	useEffect(() => {
		setSpecificNews(news.filter((items, index) => items.id == parms?.id));
	}, []);

	const itemLength = specificNews[0]?.images?.length - 1;

	// Previous button for Carousel
	const previousButton = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? itemLength : activeIndex - 1;
		setActiveIndex(nextIndex);
	};

	// Next button for Carousel
	const nextButton = () => {
		if (animating) return;
		const nextIndex = activeIndex === itemLength ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	};

	const carouselItemData = specificNews[0]?.images?.map((item) => {
		return (
			<CarouselItem
				key={item.src}
				onExited={() => setAnimating(false)}
				onExiting={() => setAnimating(true)}
			>
				<img src={item.src} alt={item?.altText} />
				<CarouselCaption captionHeader={specificNews[0]?.title}/>
			</CarouselItem>
		);
	});

	return (
		<div>
			<Nav />
			<Row className="m-0 p-0">
				<Col md="12" sm="12">
					{specificNews?.map((item, index) => (
						<Card key={item.id} className="card-posts">
							<CardBody>
								<h5>{item.title}</h5>
								{item.images && (
									<Carousel previous={previousButton} next={nextButton} activeIndex={activeIndex}>
										<CarouselIndicators
											items={item.images}
											activeIndex={activeIndex}
											onClickHandler={(newIndex) => {
												if (animating) return;
												setActiveIndex(newIndex);
											}}
										/>
										{carouselItemData}
									</Carousel>
								)}
								<p>{item.body}</p>

								<div className="m-0 d-flex justify-content-between">
									<div>
										<BsCalendarEvent size={18} />
										<span
											style={{
												marginLeft: '5px'
											}}
										>
											11 Jan 2022
										</span>
									</div>
									<div>
										<BsFillPersonFill size={18} />
										<span
											style={{
												marginLeft: '5px'
											}}
										>
											Jonas
										</span>
									</div>
								</div>
							</CardBody>
						</Card>
					))}
				</Col>
			</Row>
		</div>
	);
}
