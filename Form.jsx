import { useState } from "react";

export default function Form() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [age, setAge] = useState("");

    const handleSurname = (event) => {
        event.preventDefault();
        setSurname(event.target.value);
    }
    return (
        <form>
            {name}<br/><br/>
            {surname}<br/><br/>
            {age}<br/><br/>
            <label>
                Wpisz imie:
                <input
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </label><br/><br/>
            <label>Wpisz nazwisko:
            <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            />
            </label>Wpisz wiek:
            <label>
            <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            />
            </label><br/><br/>
        </form>
    )
}