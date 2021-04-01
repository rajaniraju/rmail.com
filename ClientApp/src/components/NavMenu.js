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
import { FaSearch } from "react-icons/fa";
import { BiMenu, BiHelpCircle } from "react-icons/bi";
import { VscAccount, VscSettingsGear } from "react-icons/vsc";
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
						<NavItem>
							<NavLink tag={Link} className="text-dark" to="/">
								<Button>
									<BiMenu />
								</Button>
							</NavLink>
						</NavItem>
						<NavbarBrand tag={Link} to="/">
							rmail.com
						</NavbarBrand>
						<NavItem>
							<NavLink tag={Link} className="text-dark" to="/">
								<Form inline>
									<div>
										<Button variant="outline-primary">
											<FaSearch />
										</Button>
									</div>
									<FormControl
										type="dropdown"
										placeholder="Search Mail"
										className="mr-lg-2"
										onChange={this.changeSearchText}
										value={this.state.searchtext}
										onClick={this.findBooks}
									/>
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
										<VscAccount />
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										tag={Link}
										className="text-dark"
										to="/counter"
									>
										<VscSettingsGear />
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										tag={Link}
										className="text-dark"
										to="/fetch-data"
									>
										<BiHelpCircle />
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
