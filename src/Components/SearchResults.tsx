import React, { useEffect, useState } from "react";
import { receivedDataType } from "../App";
import {gsap} from 'gsap';

const MESSAGE_WHEN_NO_WORDS = "."

type DataType = Array<receivedDataType>;
type SearchResultsPropsType = {
    data : DataType;
}

function classifyReceivedDataByNumberOfSyllables(data : DataType){
    let temp : string[][] = [];
    data.map((word: receivedDataType) => 
        temp[word.numSyllables-1]===undefined ? temp[word.numSyllables-1]=[word.word] : temp[word.numSyllables-1].push(word.word)
    )
    return temp;
}
export function TESTFUNCTION_classifyReceivedDataByNumberOfSyllables(data : DataType){
    return classifyReceivedDataByNumberOfSyllables(data);
}

export default function SearchResults(props : SearchResultsPropsType)  {
    const [classifiedData, setClassifiedData] = useState<Array<Array<string>>>([])

    function Animation_DisplayResults(){
        let tl=gsap.timeline();
        /**
         * SearchResults > wordsection (1 syllable, 2 ...) > numberOfSyllables + wordlist
         */
         tl.fromTo(('.wordsection'),{
              top:'200%',
          },{
              top:0,
              delay: .5,
              stagger:0.15,
          })
    
        tl.fromTo(('.word'),{
            opacity:0,
        },{
            opacity:1,
            delay: 0.010,
            stagger:0.010,
        })
        tl.set(("body"),{overflow:"auto"})
      }
    
      useEffect(()=>{
        if(classifiedData.length!==0) Animation_DisplayResults(); 
      },[classifiedData])


    function classifyDataAndSetState(data : DataType){
        let result = classifyReceivedDataByNumberOfSyllables(data);
        setClassifiedData([...result]);
    }

    useEffect(()=>{
        if(props.data) classifyDataAndSetState(props.data);
    },[props.data])

    return(
        <div data-testid="SearchResults" className="SearchResults">
            {classifiedData.length===0 ? <div className="nothingmessage">Nothing to search or no results...</div> : 
             classifiedData!==[] ? classifiedData.map((specificNumberOfSyllablesArray: string[], index: number)=>
                
                <div className="wordsection" key={index+1}>
                    {index===0 ? <div className="numberOfSyllables">{index+1} Syllable</div> : <div className="numberOfSyllables">{index+1} Syllables</div>}
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
