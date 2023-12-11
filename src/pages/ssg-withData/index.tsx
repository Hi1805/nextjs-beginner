function Product({ products }: any) {
  return (
    <div>
      <h1>SSG - WithData</h1>

      <h4>{`${JSON.stringify(products)}`}</h4>
    </div>
  );
}

export default Product;
// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch(`https://dummyjson.com/products/1`);
  const products = await res.json();

  // By returning { props: { products } }, the Blog component
  // will receive `products` as a prop at build time
  return {
    props: {
      products,
    },
  };
}
