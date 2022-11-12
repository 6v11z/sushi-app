import { Container, Row, Col, Card, Button, InputGroup, Form } from "react-bootstrap";
import Footer from "./Footer";
import Navigation from "./Navigation";
import products from "../mocking/products";
import CartProduct from "./CartProduct";

const Cart = () => {
  return (
    <div className="cart">
      <Navigation />
      <div className="cart-background">
        <Row>
          {products.map((product) => (
            <CartProduct img={product.img} name={product.name} price={product.price} description={product.description} />
          ))}
          <Col xs={6} md={4} style={{ fontSize: "20px", fontWeight: "bold", textAlign: "center", border: "1px solid black" }}>
            2
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;