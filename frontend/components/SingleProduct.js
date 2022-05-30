import gql from 'graphql-tag';
import { useQuery } from "@apollo/client";
import DisplayError from './ErrorMessage';

const SINGLE_ITEM_QUERY = gql `
  query {
    Product(where: { id: "6258948ac0401a13982109e0" }) {
      name
      price
      description
    }
  }
`;

export default function SingleProduct({ id }) {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY);

  if (loading) return <p>Loading...</p>;

  if (error) return <DisplayError error={error} />;

  return (
    <div>
      <h2>{data.Product.name}</h2>
    </div>
  );
}