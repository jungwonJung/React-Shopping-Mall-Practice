import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import "../css/detail.css";

function ProductDetail({ products }) {
  let { id } = useParams();
  let selectItem = products.find((product) => product.id == id);

  if (!selectItem) {
    return <div>Product not found</div>;
  }
  return (
    <div className="product-detail">
      <div className="product-image">
        <img
          className="product-img"
          src={selectItem.src}
          alt={selectItem.title}
        />
      </div>
      <div className="product-info">
        <h2 className="product-title">{selectItem.title}</h2>
        <p className="product-price">{selectItem.price}</p>
        <hr></hr>
        <div className="product-buttons">
          <button className="buy-now-btn">Buy</button>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
