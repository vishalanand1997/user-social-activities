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
			<div class="container-fluid">
				<nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3  bg-white ">
					{/* <a class="navbar-brand" href="">
						<img
							src=""
							alt="News"
							class="coco mr-5"
						/>
					</a> */}
					<button
						class="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon" />
					</button>

					<div
						class="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul class="navbar-nav mr-auto flex-grow-2">
							<li class="nav-item ">
								<a class="nav-link mr-2" href="#">
									Feed
								</a>
							</li>
						</ul>

						<div class="form-group has-search flex-grow-1" style={{ paddingLeft: '30%' }}>
							<span class="fa fa-search form-control-feedback" />
							<input
								type="text"
								class="form-control"
								placeholder="Search for user and email"
								onChange={(event) => setQuery(event.target.value)}
							/>
							{query &&
								news
									.filter((post) => {
										if (query === '') {
											return post;
										} else if (
											query.length &&
											post.title.toLowerCase().includes(query.toLowerCase())
										) {
											return post;
										}
									})
									.slice(0, 5)
									.map((post, index) => (
										<Card
											key={post.id}
											className="box"
											style={{ cursor: 'pointer' }}
											onClick={() => {
												specificNews(post.id);
											}}
										>
											<CardBody>
												<h5>{post.title}</h5>
											</CardBody>
										</Card>
									))}
						</div>
					</div>
				</nav>
			</div>
		</>
	);
};

export default Nav;
