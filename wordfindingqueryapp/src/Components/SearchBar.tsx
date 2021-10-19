import React, { useState } from "react";

import {getResultsForADefinedSearchWordType} from '../App'

type SearchBarPropsTypes = {
    callback: getResultsForADefinedSearchWordType;
}

export default (props: SearchBarPropsTypes) => {
    const [word, setWord] = useState("")

    return(
        <div className="SearchBar">
            <input data-testid="SearchBarInput" className="SearchBarInput" onChange={event => setWord(event.target.value)}></input>
            <button data-testid="SearchBarButton" className="SearchBarButton" onClick={()=>{props.callback(word)}}>Search</button>
        </div>
    )
}