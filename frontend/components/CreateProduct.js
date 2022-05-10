import { useState } from 'react';

export default function CreateProduct() {
  const [name, setName] = useState('');
  
  return (
    <form>
      <label htmlFor="name">
        Name
        <input type="text" id="name" name="name" placeholder="Name" />
      </label>
    </form>
  )
}