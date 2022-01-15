import { GraphQLClient, RequestDocument } from "graphql-request";

export function request({ query }: { query: RequestDocument }) {
  const endpoint = `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      // authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
      authorization: `Bearer 2d1770a4d2f741c8d8a7c3d6730d8b`,
    },
  });
  return client.request(query);
}
