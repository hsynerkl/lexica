import HomeComponent from "@/components/Home";
import { LexicaImgProps } from "@/types/Lexicaimg";
import Head from "next/head";
import { FC } from "react";

type HomeProps = {
  limit: boolean;
  imgs: LexicaImgProps[];
};

const Home: FC<HomeProps> = ({ imgs, limit }) => {
  return (
    <>
      <Head>
        <title>Lexica</title>
        <meta
          name="description"
          content="Hüseyin Erkal Clone Project with NEXT JS"
        />
      </Head>
      <HomeComponent imgs={imgs} limit={limit} />
    </>
  );
};

export async function getServerSideProps() {
  let imgs;
  let limit;

  try {
    await fetch("https://lexica.art/api/v1/search?q=apple").then((res) =>
      res
        .json()
        //@ts-ignore
        .then((res) => res.images.filter((img) => img.nsfw === false))
        .then((res) => {
          imgs = res;
          limit = false;
        })
    );
  } catch (err) {
    imgs = [];
    limit = true;
    console.log(err);
  }

  return { props: { imgs, limit } };
}

export default Home;
