import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import Product from "../Components/Product";
import Hero from "../Components/Hero";

const Home = () => {
  const { products } = useContext(ProductContext);

  // const filteredProducts = products.filter((item) => {
  //   return (
  //     item.category === "men's clothing" || item.category === "women's clothing"
  //   );
  // });

  console.log("product", products);
  return (
    <div>
      <Hero />
      <section className="py-32 flex justify-center">
        <div className="container ">
          <div className="grid  grid-cols-1 mx-auto  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm  md:max-w-none md:mx-auto">
            {products.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
