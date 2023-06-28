import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import data from "../data.js";
import { Link } from "react-router-dom";
import "../css/list.css";

function ProductList() {
  let [products] = useState(data);

  return (
    <div className="list-container">
      <Container className="production-container">
        {Array.from({ length: Math.ceil(products.length / 3) }).map(
          (_, rowIndex) => (
            <Row className="production-container-row">
              {products
                .slice(rowIndex * 3, rowIndex * 3 + 3)
                .map((products) => (
                  <Col key={products.id} className="product-col">
                    <div className="img-container">
                      <Link to={`/detail/${products.id}`}>
                        <img
                          className="img-size"
                          src={products.src}
                          alt={products.title}
                        />
                      </Link>
                    </div>
                    <Link to={`/detail/${products.id}`}>
                      <h4 className="detail-title">{products.title}</h4>
                    </Link>
                    <Link to={`/detail/${products.id}`}>
                      <p>{products.content}</p>
                    </Link>

                    <p>{products.price}</p>
                  </Col>
                ))}
            </Row>
          )
        )}
      </Container>
    </div>
  );
}

export default ProductList;
