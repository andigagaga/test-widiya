import React from "react";
import { useParams } from "react-router-dom";
import ProductDetailComponent from "../components/ProductDetailComponent/ProductDetailComponent";

export default function ProductDetailPages() {
  let { id } = useParams(); // Mengambil productId dari parameter URL

  return (
    <div>
      <ProductDetailComponent productId={id} />
    </div>
  );
}
