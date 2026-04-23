import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export default function SearchPokemonName() {
    const [pokeName, setName] = useState('');
    const [inputId, setInputId] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputId}`);
                const result = await response.json();
                // データをセットする処理
                setName(result.name);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // 非同期関数を呼び出す
        fetchData();
    },[])

    const handleSearch = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputId}`);
        const result = await response.json();
        // データをセットする処理
        setName(result.name);
    }



    return <>
        <h2>ポケモン検索</h2>

        <input id={"inputId"} onChange={(event) => {setInputId(event.target.value)}}/>
        <button onClick={handleSearch}></button>
        <h3>{pokeName}</h3>
        <Link to={"/"}>Home</Link>
    </>;

}