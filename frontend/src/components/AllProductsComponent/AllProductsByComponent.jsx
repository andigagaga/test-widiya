import React, { useEffect } from "react";
import "../CSS/Products.css";
import dropdown_icon from "../../assets/dropdown_icon.png";
import { Api } from "../../libs/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/features/product/productSlice";
import { getUserProfile } from "../../redux/features/auth/authSlice";

export default function AllProductsByComponent() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const { user, token } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getProducts(), getUserProfile());
  }, [dispatch, token]);

  console.log("productnya nih", products);

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
