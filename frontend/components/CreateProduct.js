import { useState } from 'react';

export default function CreateProduct() {
  const [name, setName] = useState('');
  
  const handleChange = (e) => {
    setName(e.target.value);
  }

  return (
    <form>
      <label htmlFor="name">
        Name
        <input 
          type="text" 
          id="name" 
          name="name" 
          placeholder="Name" 
          value={name} 
          onChange={handleChange} 
        />
      </label>
    </form>
  )
}