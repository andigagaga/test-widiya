import React from "react";
import "../CSS/Products.css";
import dropdown_icon from "../../assets/dropdown_icon.png";

export default function MyProductsComponent() {
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
        <div className="shopcategory-products">
          <div className="item">
            <img src=""></img>
            <p
              style={{
                cursor: "pointer",
                textDecoration: "underline",
                fontWeight: "bold",
              }}
            >
              product name
            </p>
            <div className="item-prices">
              <div className="item-price-new">Rp 100</div>
              <div className="item-price-old">Rp 100</div>
            </div>
          </div>
        </div>
        <div className="shopcategory-loadmore">Explore more</div>
      </div>
    </div>
  );
}
