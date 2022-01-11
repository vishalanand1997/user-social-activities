import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';

import news from '../../news.json';
import './Nav.scoped.css';

const Nav = () => {
	const [query, setQuery] = useState('');
	const history = useHistory();

	const specificNews = (id) => {
		console.log('ID', id);
		history.push(`/specificNews/${id}`);
	};

	return (
		<>
			<div className="container-fluid">
				<nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3  bg-white ">
					{/* <a class="navbar-brand" href="">
						<img
							src=""
							alt="News"
							class="coco mr-5"
						/>
					</a> */}
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>

					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav mr-auto flex-grow-2">
							<li className="nav-item ">
								<a className="nav-link mr-2" href="#">
									Feed
								</a>
							</li>
						</ul>

						<div className="form-group has-search flex-grow-1" style={{ paddingLeft: '30%' }}>
							<span className="fa fa-search form-control-feedback" />
							<input
								type="text"
								className="form-control"
								placeholder="Search for user and email"
								onChange={(event) => setQuery(event.target.value)}
							/>
						</div>
					</div>
				</nav>
				<div className='d-flex justify-content-center'>
				{query.length > 0 ?
					<Card className='suggestions-news'>
						{
							news.filter((post) => {
								if (query === '') {
									return post;
								} else if (
									query.length &&
									post.title.toLowerCase().includes(query.toLowerCase())
								) {
									console.log("Posts",post);
									return post;
								}
							})
								.slice(0, 5)
								.map((post, index) => (
									<div
										key={post.id}
										style={{ cursor: 'pointer' }}
										onClick={() => {
											specificNews(post.id);
										}}
									>
										<div>
											<p>{post.title}</p>
										</div>
									</div>
								))}
					</Card>
					: null}
					</div>
			</div>
		</>
	);
};

export default Nav;
