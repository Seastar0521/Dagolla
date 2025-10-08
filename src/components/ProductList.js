import { Link } from "react-router-dom";
import products from "../data/products";

function ProductList() {
  return (
    <div style={styles.container}>
      {products.map((p) => (
        <div key={p.id} style={styles.card}>
          <Link to={`/product/${p.id}`} style={styles.link}>
            <img src={p.image} alt={p.name} style={styles.image} />
            <h2>{p.name}</h2>
            <p>{p.price.toLocaleString()}원</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "30px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  link: { textDecoration: "none", color: "black" },
  image: { width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px" },
};

export default ProductList;
