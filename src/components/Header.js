import React from 'react';
import logo from '../logo.png';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const Header = ({cart}) => {
    return (
        <section className="header-section">
            <Container>
                <Row>
                    <Col className="logo text-left" md={7}>
                        <img className="img-fluid" src={ logo } alt="Logo"/>
                    </Col>
                    <Col className="text-right" md={5}>
                        <span className="header-cart"><FontAwesomeIcon icon={faShoppingBasket} /><span className="cart-item">{cart.length}</span></span>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Header;