import { Stack, Col } from "react-bootstrap";

const Product = ({ name, img, price }) => {
  return (
    <div className="product">
      <Col>
        <Stack gap={2} className="col-md-5 mx-auto">
          <img src={img} alt={name} />
          <div className="product-name">{name}</div>
          <div className="product-price">{price}</div>
        </Stack>
      </Col>
    </div>
  );
};

export default Product;
