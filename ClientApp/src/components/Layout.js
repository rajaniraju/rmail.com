import React, { Component } from "react";
import { Container } from "reactstrap";
import { Row,Col } from "react-bootstrap";
import { NavMenu } from "./NavMenu";
import { VerticalNavMenu } from "./VerticalNavMenu";

export class Layout extends Component {
	static displayName = Layout.name;

	render() {
		return (
			<>
				<div>
          <NavMenu />
          <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                    <VerticalNavMenu />
                    </Col>
                    <Col  xs={10} id="page-content-wrapper">
                    <Container>{this.props.children}</Container>
                    </Col> 
                </Row>

            </Container>
					
					
				</div>
			</>
		);
	}
}
