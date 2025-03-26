import { useState } from "react";

export default function FormMany() {
    const [inputs, setInputs] = useState({
        name: "",
        surname: "",
        age: 0
    });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values =>({...values, [name]: value}))
  }
  const handleSubmit = (event) => {
    event.prevent.Default();
    alert{JSON.stringify(inputs)};
  }

  return (
    <form onSubmit={handleSubmit}>
    {name}<br/><br/>
    {surname}<br/><br/>
    {age}<br/><br/>
    <label>
        Wpisz imie:
        <input
        type="text" 
        value={name}
        onChange={handleChange}
        />
    </label><br/><br/>
    <label>Wpisz nazwisko:
    <input
    type="text"
    value={surname}
    onChange={handleChange}
    />
    </label>Wpisz wiek:
    <label>
    <input
    type="number"
    value={age}
    onChange={handleChange}
    />
    </label><br/><br/>
</form>
)
}
