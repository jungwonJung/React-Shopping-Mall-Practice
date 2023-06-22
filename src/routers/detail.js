import "bootstrap/dist/css/bootstrap.min.css";

function ProductDetail({ product }) {
  return (
    <div className="product-detail">
      <div className="product-image">
        <img className="product-img" src={product.src} alt={product.title} />
      </div>
      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">{product.price}</p>
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
