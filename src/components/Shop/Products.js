import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummy_data = [
  {
    title: "My car",
    price: 6,
    description: "This is a first product - amazing!",
    id:'p1'
  },
  {
    title: "My Phone",
    price: 10,
    description: "This is a second product - amazing!",
    id:'p2'
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummy_data.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
