import React, { useEffect, useState } from 'react'

import classes from './Search.module.css';

const Search = ({ searchValue, searchHandler }) => {
    const [placeholderText, setPlaceholderText] = useState("Cauta");

    useEffect(async () => {
        const key = "cauta furnizori";
        const payload = ["cauta furnizori"];

        const translatedData = await fetch('/translate', {
            method: 'POST',
            body: JSON.stringify(payload)
        }).then(resp => resp.json()).then(data => data);

        setPlaceholderText(translatedData[key]);
    }, [])
    return (

        <div className={classes["suppliers-search-wrap"]}>
            <input
                type="text"
                className={classes["quicksearch"]}
                placeholder={placeholderText}
                value={searchValue}
                onChange={searchHandler}
            />
        </div>
    )
}

export default Search
