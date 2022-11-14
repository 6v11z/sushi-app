import { Container, Row, Col, Card, Button, InputGroup, Form } from "react-bootstrap";
import Footer from "./Footer";
import Navigation from "./Navigation";
import products from "../mocking/products";
import CartProduct from "./CartProduct";

const Cart = () => {
  return (
    <div>
      <Navigation />
      <div className="contenedor-uno">

        <Row>

          {products.map((product) => (
            <CartProduct img={product.img} name={product.name} price={product.price} description={product.description} />
          ))}

        </Row>

      </div>
      <Footer />
    </div>
  );
};

export default Cart;