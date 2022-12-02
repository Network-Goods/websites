import { useTina } from "tinacms/dist/react";
import * as Home from "../components/Home";
import { client } from "../.tina/__generated__/client";
import Layout from "../components/layouts/layout";

export default function blah(
  props: AsyncReturnType<typeof getStaticProps>["props"]
) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
      <Layout>
        <Home.Thesis data={data.copy.thesis} />
        <Home.IPFSFund data={data.copy.ipfs_fund} />
        <Home.PrivateRetrieval data={data.copy.private_retrieval} />
        <Home.Why data={data.copy.why} /> 
        <Home.About data={data.copy.about} />
      </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const tinaProps = await client.queries.copy({ relativePath: 'copy.md'});
  
  return {
    props: {
      data: tinaProps.data,
      query: tinaProps.query,
      variables: tinaProps.variables,
    },
  };
};

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any;
