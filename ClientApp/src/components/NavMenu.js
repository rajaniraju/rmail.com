import React, { Component } from "react";
import {
	Collapse,
	Container,
	Form,
	FormControl,
	Button,
	Navbar,
	NavbarBrand,
	NavItem,
	NavLink,
} from "react-bootstrap";
import { NavbarToggler } from "reactstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";

export class NavMenu extends Component {
	static displayName = NavMenu.name;

	constructor(props) {
		super(props);

		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.state = {
			collapsed: true,
		};
	}

	toggleNavbar() {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	}

	render() {
		return (
			<header>
				<Navbar
					className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
					light
				>
					<Container>
						<NavbarBrand tag={Link} to="/">
							rmail.com
						</NavbarBrand>
						<NavItem>
							<NavLink tag={Link} className="text-dark" to="/">
								<Form inline>
									<FormControl
										type="text"
										placeholder="Search Mail"
										className="mr-sm-2"
										onChange={this.changeSearchText}
										value={this.state.searchtext}
										onClick={this.findBooks}
									/>
									<Button variant="outline-primary">
										Search
									</Button>
								</Form>
							</NavLink>
						</NavItem>
						<NavbarToggler
							onClick={this.toggleNavbar}
							className="mr-2"
						/>
						<Collapse
							className="d-sm-inline-flex flex-sm-row-reverse"
							isOpen={!this.state.collapsed}
							navbar
						>
							<ul className="navbar-nav flex-grow">
								<NavItem>
									<NavLink
										tag={Link}
										className="text-dark"
										to="/"
									>
										My Account
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										tag={Link}
										className="text-dark"
										to="/counter"
									>
										Settings
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										tag={Link}
										className="text-dark"
										to="/fetch-data"
									>
										Support
									</NavLink>
								</NavItem>
							</ul>
						</Collapse>
					</Container>
				</Navbar>
			</header>
		);
	}
}
