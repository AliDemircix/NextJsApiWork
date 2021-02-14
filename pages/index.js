import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home({ characters }) {
  return (
    <Layout>
      <Head>
        <title> Main Page</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>

      <ul className="row" >
        {characters.results.map((character) => (
          <li className="card" key={character.id}>
            <img style={{padding:"15px", borderRadius:"10%"}} src={character.image}></img>
            <Link href="/character/[id]" as={`/character/${character.id}`} >
            <a><h2>{character.name}</h2></a>
            </Link>
            <p>{character.gender}</p>
            <p style={{color:"red"}}>{character.type}</p>
          
            </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await fetch(`https://rickandmortyapi.com/api/character`);
  const characters = await data.json();

  return {
    props: {
      characters,
    },
  };
}
