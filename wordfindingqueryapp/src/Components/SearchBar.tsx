import React, { useState } from "react";
import SearchBarImg from '../Assets/Images/search.svg'

import {getResultsForADefinedSearchWordType} from '../App'

type SearchBarPropsTypes = {
    callback: getResultsForADefinedSearchWordType;
}

export default (props: SearchBarPropsTypes) => {
    const [word, setWord] = useState("")

    function handleEnterKey(event: KeyboardEvent){
        if(event.key === "Enter") props.callback(word);
    }

    return(
        <div className="SearchBar">
            <input type="text" data-testid="SearchBarInput" className="SearchBarInput" onChange={event => setWord(event.target.value)} onKeyPress={handleEnterKey} placeholder="What word would you like to rhyme?"></input>
            <button data-testid="SearchBarButton" className="SearchBarButton" onClick={()=>{props.callback(word)}}><img src={SearchBarImg} /></button>
        </div>
    )
}