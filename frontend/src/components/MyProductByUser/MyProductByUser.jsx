import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import dropdown_icon from "../../assets/dropdown_icon.png";
import { getUserProfile } from "../../redux/features/auth/authSlice";
import { getNewProducts } from "../../redux/features/product/productSlice";
import "../CSS/Products.css";

export default function MyProductByUser() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const { user, token } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getNewProducts());
    dispatch(getUserProfile());
  }, [dispatch, token]);

  useEffect(() => {
    if (products) {
      products.forEach((product) => {
        console.log("Product User ID:", product.user_id);
      });
    }
  }, [products]);

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
        {token && user ? (
          <div className="shopcategory-products">
            {products
              .filter((product) => product.user_id === user.user.id)
              .map((product) => (
                <div className="item" key={product.id}>
                  <div>
                    <img src={product.image}></img>
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
                    <p className="item-price-new">{product.price}</p>
                  </div>
                  <div>
                    <button className="item-button-delete">Delete</button>
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
