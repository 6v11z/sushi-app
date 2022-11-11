import Navigation from "./Navigation";
import Product from "./Product";
import { Container, Row } from "react-bootstrap";
import products from "../mocking/products";

const Menu = () => {
  return (
    <div className="menu">
      <Navigation />
      <div className="products">
        <Container>
          <Row>
            {products.map((product) => (
              <Product
                key={product.id}
                name={product.name}
                img={product.img}
                price={product.price}
              />
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );  
};

export default Menu;
