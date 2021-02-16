import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import slug from "slug";

export default function CharacterDetail({ character }) {
  return (
    <Layout>
      <Head>
        <title> Main Page</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>

      <div className="card">
        <figure>
          <img
            style={{ borderRadius: "50%", width: "200px", padding: "10px" }}
            src={character.image}
          ></img>
        </figure>
        <h2>{character.name} </h2>
        {character.status === "Alive" ? (
          <b>
            <p style={{ color: "green", padding: "10px" }}>
              {character.status}
            </p>
          </b>
        ) : (
          <b>
            <p style={{ color: "red", fontSize: "24px" }}>{character.status}</p>
          </b>
        )}

        <Link href="/" >
          <a>
            <button
              style={{
                backgroundColor: "tomato",
                border: "none",
                padding: "10px",
              }}
            >
              <span style={{ color: "whitesmoke" }}>
                Get Back
              </span>
            </button>
          </a>
        </Link>
      </div>
      {console.log(character.name)}
    </Layout>
  );
}

export async function getStaticPaths() {
  const data = await fetch(`https://rickandmortyapi.com/api/character`);
  const characters = await data.json();

  return {
    paths: characters.results.map((character) => {
      return { params: { slug: `${slug(character.name)}-${character.id}` } };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.slug.split("-").slice(-1)[0];
  console.log(params.slug);
  console.log(id);
  const data = await fetch(`https://rickandmortyapi.com/api/character/` + id);
  const character = await data.json();

  return {
    props: {
      character,
    },
  };
}
