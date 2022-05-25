import gql from 'graphql-tag';
import { useQuery } from "@apollo/client";

const SINGLE_ITEM_QUERY = gql `
  query {
    Product(where:{
      id: "6258948ac0401a13982109e0"
    }) {
      name
      price
      description
    }
  }
`;

export default function SingleProduct({ query }){
  
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY);
  
  return (
    <p>single product {query.id}</p>
  );
}