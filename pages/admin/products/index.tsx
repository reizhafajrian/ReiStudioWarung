import type { ReactElement } from "react";
import AllProducts from "@components/admin/product/AllProducts";
import Layout from "@components/layout/Layout";

const AllProductsPage = (props: any) => {
  return (
    <AllProducts
      products={props.products ? props.products : []}
      result={props.result}
    />
  )
}


export default AllProductsPage;

AllProductsPage.getLayout = function getLayout(content: ReactElement) {

  return <Layout pageTitle="Products">{content}</Layout>;
};

// fetching data
export const getServerSideProps = async ({ query }: any) => {
  const page = query.page || 1

  const res = await fetch(
    "http://localhost:3000/api/products?category=all&search=all"
  );

  const data = await res.json();

  return { props: { products: data.products } };
};
