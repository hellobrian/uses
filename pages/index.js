import Layout from "../components/Layout";

const Index = ({ title, description, ...props }) => {
  return (
    <Layout pageTitle={title}>
      <h1 className="title">Welcome to my blog!</h1>
      <p className="description">{description}</p>
      <main>Posts go here!</main>
    </Layout>
  );
};

export default Index;

/**
 * getStaticProps lets you fetch data, and return it as props to the page component.
 * You can use getStaticProps to fetch local data
 * (as you can see here, fetching from the siteconfig.json file),
 * or external APIs and libraries.
 * This function will only work on page components in the pages directory!
 * The page will be rendered at build time, and you can pass that data to its child components.
 */
export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
