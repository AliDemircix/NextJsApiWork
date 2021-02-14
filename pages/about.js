import Layout from "../components/Layout";
import Head from "next/head";
export default function About() {
  return (
    <Layout>
      <Head>
        <title> About Page</title>
      </Head>
      <main style={{ backgroundColor: "#c2c2c2", minHeight: "500px" }}>
        <h2 style = {{padding:"10px"}}> About US</h2>
      </main>
    </Layout>
  );
}
