import React, { Component } from "react";
import { Container, Button, Navbar, Nav } from "react-bootstrap";

//import { NavbarToggler } from "reactstrap";
//import { Link } from "react-router-dom";
import "./NavMenu.css";

export class VerticalNavMenu extends Component {
	static displayName = VerticalNavMenu.name;

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
			<Nav
				className="col-md-12 d-none d-md-block bg-light sidebar"
				activeKey="/home"
				onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
			>
				<div className="sidebar-sticky"></div>
				<Nav.Item>
					<Nav.Link href="/home">
						<Button>Compose</Button>
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="/home">Inbox</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link-1">Sent</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link-2">Draft</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link-3">Trash</Nav.Link>
				</Nav.Item>
			</Nav>
		);
	}
}
