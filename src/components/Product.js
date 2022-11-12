import { Stack, Button } from "react-bootstrap";

const Product = ({ name, img, price }) => {
  return (
    <div className="col-lg-6">
      <Stack gap={2} className="col-md-5 mx-auto">
        <img src={img} alt={name} />
        <div className="d-flex flex-row">
          <div>
            <div className="product-name">{name}</div>
            <div className="product-price">{price}</div>
          </div>
          <div>
            <Button variant="success">
              Agregar
            </Button>
          </div>
        </div>
      </Stack>
    </div>
  );
};

export default Product;
