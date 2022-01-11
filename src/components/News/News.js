import React, { Fragment, useEffect, useState } from 'react';
import news from '../../news.json';
import { Card, CardBody } from 'reactstrap';
import ReactPaginate from 'react-paginate';
import { Row, Col } from 'reactstrap';
import './News.scoped.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { BsFillPersonFill, BsCalendarEvent } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import Nav from '../Nav/Nav';
export default function News() {
	console.log('news', news);
	const history = useHistory();
	const [newsList, setNewsList] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);
	const [pageCount, setPageCount] = useState(1);
	const [itemOffset, setItemOffset] = useState(0);
	useEffect(() => {
		const endOffset = itemOffset + 10;
		setNewsList(news.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(news.length / 10));
	}, [itemOffset]);

	const Previous = () => {
		return (
			<Fragment>
				<span className="align-middle d-none d-md-inline-block">
					<FaAngleLeft size={20} style={{ color: '#6C757D' }} />
				</span>
			</Fragment>
		);
	};
	const Next = () => {
		return (
			<Fragment>
				<span className="align-middle d-none d-md-inline-block">
					<FaAngleRight size={20} style={{ color: '#6C757D' }} />
				</span>
			</Fragment>
		);
	};
	const handlePagination = (page) => {
		console.log('Page0', page);
		setCurrentPage(page.selected);
		const newOffset = (page.selected * 10) % news.length;
		setItemOffset(newOffset);
		setCurrentPage(page.selected);
	};

	// ** Custom Pagination Component
	const CustomPagination = () => (
		<ReactPaginate
			previousLabel={<Previous size={15} />}
			nextLabel={<Next size={15} />}
			forcePage={currentPage}
			onPageChange={(page) => handlePagination(page)}
			pageCount={pageCount}
			breakLabel={'...'}
			pageRangeDisplayed={2}
			marginPagesDisplayed={2}
			activeClassName={'active'}
			pageClassName={'page-item'}
			nextLinkClassName={'page-link'}
			nextClassName={'page-item next'}
			previousClassName={'page-item prev'}
			previousLinkClassName={'page-link'}
			pageLinkClassName={'page-link'}
			breakClassName="page-item"
			breakLinkClassName="page-link"
			containerClassName={'pagination react-paginate pagination-sm justify-content-center pr-1 mt-4'}
		/>
	);
	const specificNews = (id) => {
		console.log('ID', id);
		history.push(`/specificNews/${id}`);
	};
	return (
		<div>
			<Nav />
			<Row className="m-0 p-0">
				<Col md="12" sm="12">
					{newsList?.map((item, index) => (
						<Card
							key={item.id}
							className="card-posts"
							style={{ cursor: 'pointer' }}
							onClick={() => {
								specificNews(item.id);
							}}
						>
							<CardBody>
								<h5>{item.title}</h5>
								<p>{item.body}</p>
								<div className="m-0 d-flex justify-content-between">
									<div>
										<BsCalendarEvent size={18} />
										<span style={{ marginLeft: '5px' }}>11 Jan 2022</span>
									</div>
									<div>
										<BsFillPersonFill size={18} />
										<span style={{ marginLeft: '5px' }}>Jonas</span>
									</div>
								</div>
							</CardBody>
						</Card>
					))}
					<CustomPagination />
				</Col>
			</Row>
		</div>
	);
}
