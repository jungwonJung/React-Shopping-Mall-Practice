import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import data from "../data.js";
import ProductDetail from "./detail.js";

function ProductList() {
  let [products] = useState(data);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // 상품 클릭 이벤트 처리 함수
  const handleProductClick = (productId) => {
    setSelectedProduct(productId);
  };

  // 선택된 상품의 상세 페이지 표시
  if (selectedProduct !== null) {
    const selectedProductData = products.find(
      (product) => product.id === selectedProduct
    );
    return <ProductDetail product={selectedProductData} />;
  }
  return (
    <Container className="production-container">
      {Array.from({ length: Math.ceil(products.length / 3) }).map(
        (_, rowIndex) => (
          <Row className="production-container-row">
            {products.slice(rowIndex * 3, rowIndex * 3 + 3).map((products) => (
              <Col onClick={() => handleProductClick(products.id)}>
                <div className="img-container">
                  <img
                    className="img-size"
                    src={products.src}
                    alt={products.title}
                  />
                </div>
                <h4>{products.title}</h4>
                <p>{products.content}</p>
                <p>{products.price}</p>
              </Col>
            ))}
          </Row>
        )
      )}
    </Container>
  );
}

export default ProductList;
