import HomeComponent from "@/components/Home";
import Head from "next/head";
import { FC } from "react";

type HomeProps = {
  imgs: any;
};

const Home: FC<HomeProps> = ({ imgs }) => {
  return (
    <>
      <Head>
        <title>Lexica</title>
      </Head>
      <HomeComponent imgs={imgs} />
    </>
  );
};

export async function getServerSideProps() {
  const imgs = await fetch(
    "https://pexelsdimasv1.p.rapidapi.com/v1/search?query=ocean&locale=en-US&per_page=50&page=1",
    {
      method: "GET",
      headers: {
        Authorization:
          "zfYVk5YvwkjkfRskTnCUo8UEJfKf2olFC8lFGqGc1uVOT4YInbsqGdhh",

        "X-RapidAPI-Key": "8c7b64bd81mshbf8bd1ce84a3d21p137356jsn36e4da30c471",
        "X-RapidAPI-Host": "PexelsdimasV1.p.rapidapi.com",
      },
    }
  ).then((res) => res.json().then((res) => res.photos));

  // Pass data to the page via props
  return { props: { imgs } };
}

export default Home;
