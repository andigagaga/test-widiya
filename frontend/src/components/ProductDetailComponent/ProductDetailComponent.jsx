import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductById } from "../../redux/features/product/productSlice";
import "./ProductDetailComponent.css";

const ProductDetailComponent = ({ productId }) => {
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductById(productId));
  }, [dispatch, productId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  if (!product) return <div>No product found</div>;

  return (
    <div className="product-detail">
      <div className="product-detail-header">
        <h1>Product Detail Page</h1>
      </div>
      <div className="product-detail-content">
        <img src={product.image} />
        <div className="product-detail-info">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailComponent;
