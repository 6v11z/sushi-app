import { Row } from "react-bootstrap";
import Footer from "./Footer";
import Navigation from "./Navigation";
import CartProduct from "./CartProduct";

const Cart = ({ cartProducts }) => {
  return (
    <div>
      <Navigation />
      <div className="contenedor-uno">
        <Row>
          {cartProducts.map((cartProduct) => (
            <CartProduct
              img={cartProduct.img}
              name={cartProduct.name}
              price={cartProduct.price}
              description={cartProduct.description}
            />
          ))}
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
