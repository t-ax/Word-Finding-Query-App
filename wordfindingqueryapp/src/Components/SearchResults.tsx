import React from "react";
import { receivedDataType } from "../App";

type SearchResultsPropsType = {
    data : Array<receivedDataType>;
}

export default (props : SearchResultsPropsType) => {
    return(
        <div data-testid="SearchResults" className="SearchResults">
            {props.data ? props.data.map(e=>
                <div className="word" key={e.word}>{e.word}</div>
            ):<div>Fail</div>}
        </div>
    )
}