import Navigation from "./Navigation";
import Footer from "./Footer";
import products from "../mocking/products";
import Item from "./Item";
import { Row } from "react-bootstrap";
import { useState } from "react";

const Menu = () => {

  const [productosCarro, setProductosCarro] = useState([])
  console.log(productosCarro)

  const agregaCarro = (producto) => {
    setProductosCarro(productosCarro.concat(producto))
  }

  return (
    <div>
      <Navigation cartProducts={productosCarro}/>
      <div className="contenedor-uno">
        <Row xs={2} md={5} className="g-3">
          {products.map((product) => (
            <Item
              key={product.id}
              name={product.name}
              price={product.price}
              img={product.img}
              description={product.description}
              handleAdd={() => agregaCarro(product)}
            />
          ))}
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;