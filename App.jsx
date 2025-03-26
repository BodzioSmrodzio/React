import React, { useState, useEffect } from 'react';

export default function Api() {
    // stan przechowujący dane
    const [data, setData] = useState([]);
    //stan przechowujacy licznik
    const [count, setCount] = useState(0);

    useEffect(() => {
        //funkcja asynchroniczna pobierająca dane
        const fetchData = async () => {
          const response = await fetch('https://randomuser.me/api/?results=5&seed=abc');
          const jsonData = await response.json();
          setData(jsonData);
        }
        //uruchomienie funkcji
        fetchData();
        //funkcja uruchamia sie tylko raz
    }, []);

    function onClick(event) {
        event.preventDefault();
        //ustawienie licznika wiekszego o 1
        setCount((actualCount) => actualCount + 1)
    }
    // wypisywanie pobranych użytkowników
    //przycisk do zmieniania licznika
    // wyswietlanie licznika
    return (
        <div>
            <h2>Random User List</h2>
            <ul>
                {data && data.results && data.results.map(user => (
                    <li key={user.login.uuid}>
                        <p>
                            Imie:
                            {user.name.first}
                        </p>
                        <p>
                          Nazwisko:
                          {user.name.last}
                        </p>
                        <p>
                          Zdjecie:
                          <img src={user.picture.large}></img>
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}