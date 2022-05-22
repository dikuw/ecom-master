import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import useForm from '../lib/useForm';
import Form from './styles/Form';

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload
  ) {
    createProduct (
      data:{
        name: $name
        description: $description
        price: $price
        status: "AVAILABLE"
        photo: {
          create: {
            image: $image,
            altText: $name 
          }
        }
      }
    ) {
      id
      price
      description
      name
    }
  }
`;

export default function CreateProduct() {
  const { inputs, handleChange, resetForm, clearForm } = useForm({
    image: '',
    name: 'enter name',
    price: 999,
    description: 'enter description',
  });

  const payload = useMutation();

  return (
    <Form onSubmit={(e) =>{
      e.preventDefault();
      console.log(inputs);
    }}>
      <fieldset>
        <label htmlFor="image">
          Image
          <input 
            required
            type="file" 
            id="image" 
            name="image" 
            onChange={handleChange}
          />
        </label>
        <label htmlFor="name">
          Name
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Name" 
            value={inputs.name} 
            onChange={handleChange}
          />
        </label>
        <label htmlFor="price">
          Price
          <input 
            type="number" 
            id="price" 
            name="price" 
            placeholder="price" 
            value={inputs.price} 
            onChange={handleChange} 
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea 
            type="text" 
            id="description" 
            name="description" 
            placeholder="description" 
            value={inputs.description} 
            onChange={handleChange} 
          />
        </label>
        <button type="submit">+ Add Product</button>
      </fieldset>
    </Form>
  );
}