export default function Page(data: any) {
  const content = JSON.stringify(data);

  return (
    <div>
      <h1>Server Side Rendering page</h1>
      <h3>{`${content}`}</h3>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://dummyjson.com/products/1`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
