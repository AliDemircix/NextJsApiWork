import { Navigation } from "./Navigation";
import Head from "next/head"

const Layout = ({ children }) => {
  return (
    <div >
      <Head>
        <title>My First Next App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />
      <main>{children}</main>
    </div>
  );
};
export default Layout;
