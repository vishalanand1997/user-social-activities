import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
	Card,
	Dropdown,
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap';
import { FaRegUserCircle } from 'react-icons/fa';
import news from '../../news.json';
import './Nav.scoped.css';

const NavBar = () => {
	const [query, setQuery] = useState('');
	const history = useHistory();
	const [dropDownOpen, setDropdown] = useState(false);
	const specificNews = (id) => {
		history.push(`/specificNews/${id}`);
		setQuery('');
		document.getElementById('search_query').value = '';
	};
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<div className="container-fluid">
				<div>
					<Navbar color="faded" light>
						<NavbarBrand href="/news" className="mr-auto">
							Feed
						</NavbarBrand>
						<NavbarToggler onClick={toggle} className="mr-2" />
						<Collapse isOpen={isOpen} navbar>
							<Nav navbar>
								<div className="d-flex justify-content-between">
									<NavItem style={{ width: '100%' }}>
										<div
											className="form-group has-search flex-grow-1"
											style={{ paddingLeft: '45%', width: '100%' }}
										>
											<span className="fa fa-search form-control-feedback" />
											<input
												type="text"
												className="form-control"
												placeholder="Search for user and email"
												id="search_query"
												onChange={(event) => setQuery(event.target.value)}
												autoComplete="off"
											/>
										</div>
									</NavItem>
									<NavItem>
										<Dropdown
											isOpen={dropDownOpen}
											toggle={() => {
												setDropdown(!dropDownOpen);
											}}
										>
											<DropdownToggle caret className="dropdown__style">
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
									</NavItem>
								</div>
							</Nav>
						</Collapse>
					</Navbar>
				</div>
				<div className="d-flex justify-content-center">
					{query.length > 0 ? (
						<Card className="suggestions-news">
							{news
								.filter((post) => {
									if (query === '') {
										return post;
									} else if (query.length && post.title.toLowerCase().includes(query.toLowerCase())) {
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

export default NavBar;
