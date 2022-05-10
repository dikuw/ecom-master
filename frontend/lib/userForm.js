import { useState } from 'react';

export default function userForm(initial = {}) {
  const [inputs, setInputs] = useState(initial);

  function handleChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }

  return {
    inputs,
    handeChange,
  }
}