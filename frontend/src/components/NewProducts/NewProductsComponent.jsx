import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import dropdown_icon from "../../assets/dropdown_icon.png";
import { getUserProfile } from "../../redux/features/auth/authSlice";
import { getNewProducts } from "../../redux/features/product/productSlice";
import "../CSS/Products.css";

export default function NewProductsComponent() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const { user, token } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getNewProducts(), getUserProfile());
  }, [dispatch, token]);
  return (
    <div>
      <div className="shop-category">
        <img className="shopcategory-banner" src=""></img>
        <div className="shopcategory-indexsort">
          <p>
            <span>Shwoing 1 - 12</span> out of 36 products
          </p>
          <div className="shopcategory-sort">
            Sort by <img src={dropdown_icon}></img>
          </div>
        </div>
        {token ? (
          <div className="shopcategory-products">
            {products.map((product) => (
              <div className="item">
                <img src=""></img>
                <p
                  style={{
                    cursor: "pointer",
                    textDecoration: "underline",
                    fontWeight: "bold",
                  }}
                >
                  {product.name}
                </p>
                <p>{product.description}</p>
                <div className="item-prices">
                  <div className="item-price-new">{product.price}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
        <div className="shopcategory-loadmore">Explore more</div>
      </div>
    </div>
  );
}
