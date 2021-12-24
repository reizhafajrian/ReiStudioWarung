import type { ReactElement } from "react";
import Layout from "@components/layout/Layout";
import Dashboard from "@components/admin/Dashboard";
import Loading from "@components/Loading/Loading";

const DashboardPage = ({ products }: any) => {
  return (
    <>
      <Dashboard products={products} />
    </>
  );
};

export default DashboardPage;

DashboardPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle="Dashboard">{content}</Layout>;
};

// fetching data
export const getServerSideProps = async () => {
  const res = await fetch(
    "http://localhost:3000/api/products?category=all&search=all"
  );

  const data = await res.json();

  return { props: { products: data.products } };
};
