import useForm from '../lib/useForm';

export default function CreateProduct() {
  const { inputs, handleChange } = useForm({
    name: 'enter name',
    price: 999,
    description: 'enter description',
  });

  return (
    <form>
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
        <input 
          type="text" 
          id="description" 
          name="description" 
          placeholder="description" 
          value={inputs.description} 
          onChange={handleChange} 
        />
      </label>
    </form>
  )
}