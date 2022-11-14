import { useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";

const CartProduct = ({ img, name, description, price }) => {
  const [contador, setContador] = useState(1);

  console.log(price * contador);

  return (
    <div>
      g
    </div>
  );
};

export default CartProduct;

