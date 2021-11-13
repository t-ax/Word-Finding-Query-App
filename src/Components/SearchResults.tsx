import React, { useEffect, useState } from "react";
import { receivedDataType } from "../App";

const MESSAGE_WHEN_NO_WORDS = ": ("

type DataType = Array<receivedDataType>;
type SearchResultsPropsType = {
    data : DataType;
}

function classifyReceivedDataByNumberOfSyllables(data : DataType){
    let temp : string[][] = [];
    data.map((word: receivedDataType) => {
        if(temp[word.numSyllables-1]===undefined){temp[word.numSyllables-1]=new Array();}
        temp[word.numSyllables-1].push(word.word);
    })
    return temp;
}
export function TESTFUNCTION_classifyReceivedDataByNumberOfSyllables(data : DataType){
    return classifyReceivedDataByNumberOfSyllables(data);
}

export default (props : SearchResultsPropsType) => {
    const [classifiedData, setClassifiedData] = useState<Array<Array<string>>>([])

    function classifyDataAndSetState(data : DataType){
        let result = classifyReceivedDataByNumberOfSyllables(data);
        setClassifiedData([...result]);
    }

    useEffect(()=>{
        if(props.data) classifyDataAndSetState(props.data);
    },[props.data])

    return(
        <div data-testid="SearchResults" className="SearchResults">
            {classifiedData.length==0 ? <div className="nothingmessage">Nothing to search or no results...</div> : 
             classifiedData!=[] ? classifiedData.map((specificNumberOfSyllablesArray: string[], index: number)=>
                
                <div className="wordsection" key={index+1}>
                    <div className="numberOfSyllables">{index+1} Syllables</div>
                    <div className="wordlist">
                        {specificNumberOfSyllablesArray ? specificNumberOfSyllablesArray.map(word=>
                            <div className="word" key={word}>{word}</div>
                        ):<>{MESSAGE_WHEN_NO_WORDS}</>}
                    </div>
                </div>
            ):<div>Failed to load data</div>}
        </div>
    )
}