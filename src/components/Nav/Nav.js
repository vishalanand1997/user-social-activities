import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FaRegUserCircle } from 'react-icons/fa';
import news from '../../news.json';
import './Nav.scoped.css';

const Nav = () => {
	const [query, setQuery] = useState('');
	const history = useHistory();
	const [dropDownOpen, setDropdown] = useState(false)
	const specificNews = (id) => {
		history.push(`/specificNews/${id}`);
		setQuery('')
		document.getElementById('search_query').value = ""
	};

	return (
		<>
			<div className="container-fluid">
				<nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3  bg-white ">
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

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto flex-grow-2">
							<li className="nav-item ">
								<a className="nav-link mr-2" href="/news">
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
								id="search_query"
								onChange={(event) => setQuery(event.target.value)}
							/>
						</div>
						<div className="d-flex justify-content-center">
							<Dropdown
								isOpen={dropDownOpen}
								toggle={() => {
									setDropdown(!dropDownOpen);
								}}
							>
								<DropdownToggle caret className='dropdown__style'>
									{JSON.parse(localStorage.getItem('userDetails')).fname}{' '}
									{JSON.parse(localStorage.getItem('userDetails')).lname}
									<FaRegUserCircle size={'2em'} style={{ paddingLeft: '10px' }} />
								</DropdownToggle>
								<DropdownMenu className="mt-2">
									<DropdownItem
										onClick={() => {
											localStorage.clear();
											history.push('/');
										}}

									>
										Logout
									</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</div>
					</div>
				</nav>
				<div className="d-flex justify-content-center">
					{query.length > 0 ? (
						<Card className="suggestions-news">
							{news
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
					) : null}
				</div>
			</div>
		</>
	);
};

export default Nav;
