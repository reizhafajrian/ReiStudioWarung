import { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Loading from "@components/Loading/Loading";
import { useSelector } from "react-redux";
import Alert from "@components/Alert/Alert";

interface props {
  pageTitle: string;
  children: ReactNode;
}

const Layout = ({ pageTitle, children }: props) => {
  const state = useSelector((state) => state);

  return (
    <>
      <Head>
        <title>Warung | {pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-vh-100 d-flex flex-column">
        {state.loading === true && <Loading />}

        <Header />

        <div>{children}</div>
        {state.alert.isVisible === true && <Alert />}

        <Footer />
      </div>
    </>
  );
};

export default Layout;
