import React from "react";
import Layout from "../components/layout";
import { fetchAPI } from "../lib/api";
import Seo from "../components/seo";
import Banner from "../components/banner";
import { Container } from "@material-ui/core";
const Home = ({ categories, homepage }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.seo} />
      <Container>
        <Banner />
        <h1>hello</h1>
      </Container>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [categories, homepage] = await Promise.all([
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { categories, homepage },
    revalidate: 1,
  };
}

export default Home;
