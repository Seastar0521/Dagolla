import React from 'react';
import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <div>상품을 찾을 수 없습니다.</div>;

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <img src={product.image} alt={product.name} style={{ width: 300, borderRadius: 10 }} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <strong>{product.price.toLocaleString()}원</strong>
    </div>
  );
}

export default ProductDetail;